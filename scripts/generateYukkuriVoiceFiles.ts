import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';
// Import {AudioContext} from 'web-audio-api';
import wae from 'web-audio-engine';
import fsExtra from 'fs-extra';
const AudioContext = wae.RenderingAudioContext;

import AquesTalk10, {gVoice_F1} from 'node-aquestalk10';
import AqKanji2Koe from 'node-aqkanji2koe';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {
	DEFAULT_SECTION_END_FRAMES,
	DEFAULT_SECTION_INITIAL_DELAY_FRAMES,
	FPS,
	TALK_GAP_FRAMES,
} from '../src/constants';
import {getAudioDurationInSeconds} from 'get-audio-duration';
import {getVideoDurationInSeconds} from 'get-video-duration';
import {AqKanji2KoeSetDevKey, Aquestalk10DevKey} from './aquest-keys';
import {SPEAKER, SPEAKER_TYPE} from '../src/yukkuri/yukkuriVideoConfig';
import {
	AudioData,
	getAudioData,
	getWaveformPortion,
} from '@remotion/media-utils';
import {getTotalVideoFrames} from '../src/utils/getTotalVideoFrames';
import {getTotalFramesBeforeSection} from '../src/utils/getTotalFramesBeforeSection';

const aquestalk = new AquesTalk10(
	'./vendor/AquesTalk.framework/Versions/A/AquesTalk'
);
aquestalk.AquesTalkSetDevKey(Aquestalk10DevKey);
const aqkanji2koe = new AqKanji2Koe(
	'./vendor/AqKanji2Koe.framework/Versions/A/AqKanji2Koe',
	'./vendor/AqUsrDic.framework/Versions/A/AqUsrDic',
	'./vendor/aq_dic_large'
);
aqkanji2koe.AqKanji2KoeSetDevKey(AqKanji2KoeSetDevKey);

const ReimuVoice = {
	base: 0,
	volume: 100,
	accent: 80,
	fsc: 103,
	speed: 100,
	lmd: 110,
	pitch: 84,
};
const MarisaVoice = {...gVoice_F1, base: 0, speed: 105, lmd: 130, pitch: 84};

const forceGenerate = process.argv[2] === 'force';

if (forceGenerate) {
	fsExtra.emptyDirSync('./public/audio/yukkuri');
}

function generateYukkuriAudio(text: string, speaker: SPEAKER_TYPE) {
	const id = uuidv4().replaceAll('-', '');
	const result = aquestalk.AquesTalkSyntheUtf16(
		speaker === SPEAKER.reimu ? ReimuVoice : MarisaVoice,
		text
	);
	const filename = `${id}.wav`;
	fs.writeFileSync(`./public/audio/yukkuri/${filename}`, result);

	return id;
}

// Write Yukkuri Voice Files if exists
FirstVideoConfig.sections.forEach((section) => {
	section.talks.forEach((talk) => {
		if ((forceGenerate || !talk.id) && talk.text.length > 0) {
			const text = aqkanji2koe.AqKanji2KoeConvertUtf8(talk.text);

			if (talk.speaker === SPEAKER.reimuAndMarisa) {
				const reimuTalkId = generateYukkuriAudio(text, 'reimu');
				const marisaTalkId = generateYukkuriAudio(text, 'marisa');

				talk.ids = [reimuTalkId, marisaTalkId];
			} else {
				const id = generateYukkuriAudio(text, talk.speaker);
				talk.id = id;
			}
		}
	});
});

(async () => {
	for (const section of FirstVideoConfig.sections) {
		const {talks} = section;

		for (let i = 0; i < section.talks.length; i++) {
			const currentTalk = talks[i];
			if (currentTalk.id || currentTalk.ids) {
				const id = currentTalk.ids ? currentTalk.ids[0] : currentTalk.id;
				const durationSec = await getAudioDurationInSeconds(
					`./public/audio/yukkuri/${id}.wav`
				);

				currentTalk.audioDurationFrames = Math.floor((durationSec || 1) * FPS);
			}
		}
	}

	for (const section of FirstVideoConfig.sections) {
		const {talks} = section;

		section.fromFramesMap = {};
		let cumulate =
			section.initialDelayFrames || DEFAULT_SECTION_INITIAL_DELAY_FRAMES;

		section.fromFramesMap[0] = cumulate;

		section.beforeMovieFrames = 0;
		if (section.beforeMovie) {
			section.beforeMovieFrames =
				(await getVideoDurationInSeconds(`./public${section.beforeMovie}`)) *
				FPS;
			section.totalFrames += section.beforeMovieFrames;
		}

		for (let i = 1; i < section.talks.length; i++) {
			// ここでは今の Talk 以前の音声ファイルの秒数を取得するため index - 1 を参照している
			const previousTalk = talks[i - 1];
			if (previousTalk.id || previousTalk.ids) {
				const id = previousTalk.ids ? previousTalk.ids[0] : previousTalk.id;
				const durationSec = await getAudioDurationInSeconds(
					`./public/audio/yukkuri/${id}.wav`
				);

				const audioDurationframes = Math.floor((durationSec || 1) * FPS);
				const totalFrames =
					previousTalk.customDuration || audioDurationframes + TALK_GAP_FRAMES;
				cumulate += totalFrames;
				section.fromFramesMap[i] = cumulate;
				section.totalFrames = cumulate;

				if (i === section.talks.length - 1) {
					const currentTalk = talks[i];
					const id = currentTalk.ids ? currentTalk.ids[0] : currentTalk.id;
					const lastAudioDurationSec = await getAudioDurationInSeconds(
						`./public/audio/yukkuri/${id}.wav`
					);
					section.totalFrames +=
						Math.floor(lastAudioDurationSec) * FPS + TALK_GAP_FRAMES;
				}
			}
		}

		section.totalFrames += DEFAULT_SECTION_END_FRAMES;

		if (section.afterMovie) {
			section.afterMovieFrames = Math.ceil(
				(await getVideoDurationInSeconds(`./public${section.afterMovie}`)) * FPS
			);
			section.totalFrames += section.afterMovieFrames;
		}
	}

	for (const section of FirstVideoConfig.sections) {
		section.reimuKuchipakuMap = {
			frames: [0],
			amplitude: [6],
		};

		section.marisaKuchipakuMap = {
			frames: [0],
			amplitude: [5],
		};
	}

	fs.writeFileSync(
		`./transcripts/firstvideo.tsx`,
		`import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = ${JSON.stringify(FirstVideoConfig)}
				`
	);

	const totalFrames = getTotalVideoFrames(FirstVideoConfig);
	const ReimuFaceByFrame = new Array(totalFrames).fill('default');
	const MarisaFaceByFrame = new Array(totalFrames).fill('default');

	FirstVideoConfig.sections.forEach((section, sectionIndex) => {
		const beforeFrames = getTotalFramesBeforeSection(
			FirstVideoConfig,
			sectionIndex
		);
		section.talks.forEach((talk, index) => {
			const startFrame = beforeFrames + section.fromFramesMap[index];
			for (
				let i = startFrame;
				i < startFrame + talk.audioDurationFrames + TALK_GAP_FRAMES;
				i++
			) {
				if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'reimu') {
					ReimuFaceByFrame[i] = talk.face || 'default';
				}
				if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'marisa') {
					MarisaFaceByFrame[i] = talk.face || 'default';
				}
			}
		});
	});

	fs.writeFileSync(
		`./transcripts/FaceByFrame.ts`,
		`export const ReimuFaceByFrame = ${JSON.stringify(ReimuFaceByFrame)};
export const MarisaFaceByFrame = ${JSON.stringify(MarisaFaceByFrame)};				`
	);

	const ReimuMouthByFrame = new Array(totalFrames).fill('05');
	const MarisaMouthByFrame = new Array(totalFrames).fill('05');

	FirstVideoConfig.sections.forEach((section, sectionIndex) => {
		const beforeFrames = getTotalFramesBeforeSection(
			FirstVideoConfig,
			sectionIndex
		);
		section.talks.forEach((talk, index) => {
			const startFrame = beforeFrames + section.fromFramesMap[index];
			for (let i = startFrame; i < startFrame + talk.audioDurationFrames; i++) {
				if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'reimu') {
					for (
						let i = startFrame;
						i <= startFrame + talk.audioDurationFrames;
						i++
					) {
						const index = Math.abs(3 - ((i - startFrame) % 6));
						let imageIndex = 6;
						switch (index) {
							case 0:
								imageIndex = 0;
								break;
							case 1:
								imageIndex = 2;
								break;
							case 2:
								imageIndex = 4;
								break;
							case 3:
								imageIndex = 6;
								break;
						}
						ReimuMouthByFrame[i] = imageIndex.toString().padStart(2, '0');
					}
				}
				if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'marisa') {
					for (
						let i = startFrame;
						i <= startFrame + talk.audioDurationFrames;
						i++
					) {
						const index = Math.abs(3 - ((i - startFrame) % 6));
						let imageIndex = 5;
						switch (index) {
							case 0:
								imageIndex = 0;
								break;
							case 1:
								imageIndex = 2;
								break;
							case 2:
								imageIndex = 3;
								break;
							case 2:
								imageIndex = 5;
								break;
						}
						MarisaMouthByFrame[i] = imageIndex.toString().padStart(2, '0');
					}
				}
			}
		});
	});

	fs.writeFileSync(
		`./transcripts/MouthByFrame.ts`,
		`export const ReimuMouthByFrame = ${JSON.stringify(ReimuMouthByFrame)};
export const MarisaMouthByFrame = ${JSON.stringify(MarisaMouthByFrame)};				`
	);
})();

const originalGetAudioData = async (src: string): Promise<AudioData> => {
	const audioContext = new AudioContext();

	const file = fs.readFileSync(src);

	const wave = await audioContext.decodeAudioData(file);

	const channelWaveforms = new Array(wave.numberOfChannels)
		.fill(true)
		.map((_, channel) => {
			return wave.getChannelData(channel);
		});

	const metadata = {
		channelWaveforms,
		sampleRate: audioContext.sampleRate,
		durationInSeconds: wave.duration,
		numberOfChannels: wave.numberOfChannels,
		resultId: uuidv4(),
		isRemote: false,
	};
	return metadata;
};
