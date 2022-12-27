import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';
// Import {AudioContext} from 'web-audio-api';
import wae from 'web-audio-engine';
import fsExtra from 'fs-extra';
const AudioContext = wae.RenderingAudioContext;

import AquesTalk10, {gVoice_F1} from 'node-aquestalk10';
import AqKanji2Koe from 'node-aqkanji2koe';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {FPS, TALK_GAP_FRAMES} from '../src/constants';
import {getAudioDurationInSeconds} from 'get-audio-duration';
import {AqKanji2KoeSetDevKey, Aquestalk10DevKey} from './aquest-keys';
import {SPEAKER} from '../src/yukkuri/yukkuriVideoConfig';
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

// Write Yukkuri Voice Files if exists
FirstVideoConfig.sections.forEach((section) => {
	section.talks.forEach((talk) => {
		if ((forceGenerate || !talk.id) && talk.text.length > 0) {
			const id = uuidv4().replaceAll('-', '');
			console.log(talk.text);
			const text = aqkanji2koe.AqKanji2KoeConvertUtf8(talk.text);
			const result = aquestalk.AquesTalkSyntheUtf16(
				talk.speaker === SPEAKER.reimu ? ReimuVoice : MarisaVoice,
				text
			);
			const filename = `${id}.wav`;
			fs.writeFileSync(`./public/audio/yukkuri/${filename}`, result);
			talk.id = id;
		}
	});
});

FirstVideoConfig.sections.forEach((section) => {
	const {talks} = section;

	section.fromFramesMap = {};
	let cumulate = 0;

	section.fromFramesMap[0] = cumulate;

	// FIXME: ここ不安定
	for (let i = 1; i < section.talks.length; i++) {
		// ここでは今の Talk 以前の音声ファイルの秒数を取得するため index - 1 を参照している
		const previoudTalk = talks[i - 1];
		if (previoudTalk.id) {
			getAudioDurationInSeconds(
				`./public/audio/yukkuri/${previoudTalk.id}.wav`
			).then((durationSec) => {
				const audioDurationframes = Math.floor((durationSec || 1) * FPS);
				const totalFrames =
					previoudTalk.customDuration || audioDurationframes + TALK_GAP_FRAMES;
				cumulate += totalFrames;
				section.fromFramesMap[i] = cumulate;
				section.totalFrames = cumulate;

				if (i === section.talks.length - 1) {
					getAudioDurationInSeconds(
						`./public/audio/yukkuri/${talks[i].id}.wav`
					).then((durationSec) => {
						section.totalFrames += Math.floor(durationSec) + TALK_GAP_FRAMES;
					});
				}
			});
		}
	}
});

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

setTimeout(() => {
	FirstVideoConfig.sections.forEach((section) => {
		const {talks} = section;

		section.kuchipakuMap = {
			frames: [],
			amplitude: [],
		};

		talks.forEach((talk, talkIndex) => {
			if (talk.id) {
				originalGetAudioData(`./public/audio/yukkuri/${talk.id}.wav`).then(
					(audioData) => {
						if (audioData) {
							const numberOfSamples = 24;
							// 音声の波形データから「どのフレームで」「どの口になるかを指定するマップを作成」
							const waveformPortion = getWaveformPortion({
								audioData,
								startTimeInSeconds: 0,
								durationInSeconds: audioData.durationInSeconds,
								numberOfSamples,
							});

							const audioFragmentFrame = Math.floor(
								(audioData.durationInSeconds * FPS) / numberOfSamples
							);

							waveformPortion.forEach((bar, index) => {
								const frame =
									section.fromFramesMap[talkIndex] + audioFragmentFrame * index;
								if (!section.kuchipakuMap.frames.find((f) => f === frame)) {
									const lastFrame =
										talkIndex > 0 ? section.fromFramesMap[talkIndex - 1] : -1;
									const currentFrame =
										section.fromFramesMap[talkIndex] +
											audioFragmentFrame * index || 0;

									if (currentFrame > lastFrame) {
										section.kuchipakuMap.frames.push(
											section.fromFramesMap[talkIndex] +
												audioFragmentFrame * index || 0
										);
										// なぜか null が入ることがあるので 0 を入れておく
										section.kuchipakuMap.amplitude.push(bar.amplitude || 0);
									}
								}
							});
						}
					}
				);
			}
		});
	});
}, 3000);

setTimeout(() => {
	FirstVideoConfig.sections.forEach((s) => {
		console.log(s.kuchipakuMap.frames.length, s.kuchipakuMap.amplitude.length);
	});
	fs.writeFileSync(
		`./transcripts/firstvideo.tsx`,
		`import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = ${JSON.stringify(FirstVideoConfig)}
				`
	);
}, 6000);
