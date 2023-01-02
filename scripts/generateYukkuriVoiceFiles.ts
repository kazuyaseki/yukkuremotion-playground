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

		if (section.afterMovie) {
			section.afterMovieFrames =
				(await getVideoDurationInSeconds(`./public${section.afterMovie}`)) *
				FPS;
			section.totalFrames += Math.floor(section.afterMovieFrames);
		}
	}

	for (const section of FirstVideoConfig.sections) {
		const {talks, fromFramesMap} = section;

		section.reimuKuchipakuMap = {
			frames: [0],
			amplitude: [6],
		};

		section.marisaKuchipakuMap = {
			frames: [0],
			amplitude: [5],
		};

		talks.forEach((talk, index) => {
			const start = fromFramesMap[index];

			if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'reimu') {
				for (let i = 0; i <= talk.audioDurationFrames; i++) {
					section.reimuKuchipakuMap.frames.push(i + start);
					const index = Math.abs(3 - (i % 6));
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
					section.reimuKuchipakuMap.amplitude.push(imageIndex);
				}
			}
			if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'marisa') {
				for (let i = 0; i <= talk.audioDurationFrames; i++) {
					section.marisaKuchipakuMap.frames.push(i + start);
					const index = Math.abs(5 - (i % 10));
					section.marisaKuchipakuMap.amplitude.push(index);
				}
			}
		});

		// talks.forEach((talk, talkIndex) => {
		// 	if (talk.id || talk.ids) {
		// 		const id = talk.ids ? talk.ids[0] : talk.id;
		// 		originalGetAudioData(`./public/audio/yukkuri/${id}.wav`).then(
		// 			(audioData) => {
		// 				if (audioData) {
		// 					const numberOfSamples = 24;
		// 					// 音声の波形データから「どのフレームで」「どの口になるかを指定するマップを作成」
		// 					const waveformPortion = getWaveformPortion({
		// 						audioData,
		// 						startTimeInSeconds: 0,
		// 						durationInSeconds: audioData.durationInSeconds,
		// 						numberOfSamples,
		// 					});

		// 					const audioFragmentFrame = Math.floor(
		// 						(audioData.durationInSeconds * FPS) / numberOfSamples
		// 					);

		// 					waveformPortion.forEach((bar, index) => {
		// 						const frame =
		// 							section.fromFramesMap[talkIndex] + audioFragmentFrame * index;
		// 						if (!section.kuchipakuMap.frames.find((f) => f === frame)) {
		// 							const lastFrame =
		// 								talkIndex > 0 ? section.fromFramesMap[talkIndex - 1] : -1;
		// 							const currentFrame =
		// 								section.fromFramesMap[talkIndex] +
		// 									audioFragmentFrame * index || 0;

		// 							if (currentFrame > lastFrame) {
		// 								section.kuchipakuMap.frames.push(
		// 									section.fromFramesMap[talkIndex] +
		// 										audioFragmentFrame * index || 0
		// 								);
		// 								// なぜか null が入ることがあるので 0 を入れておく
		// 								section.kuchipakuMap.amplitude.push(bar.amplitude || 0);
		// 							}
		// 						}
		// 					});
		// 				}
		// 			}
		// 		);
		// 	}
		// });
	}

	fs.writeFileSync(
		`./transcripts/firstvideo.tsx`,
		`import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = ${JSON.stringify(FirstVideoConfig)}
				`
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
