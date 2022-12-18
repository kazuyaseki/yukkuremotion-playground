import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';

import AquesTalk10, {gVoice_F1} from 'node-aquestalk10';
import AqKanji2Koe from 'node-aqkanji2koe';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {FPS, TALK_GAP_FRAMES} from '../src/constants';
import {getAudioDurationInSeconds} from 'get-audio-duration';
import {AqKanji2KoeSetDevKey, Aquestalk10DevKey} from './aquest-keys';
import {SPEAKER} from '../src/yukkuri/yukkuriVideoConfig';

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

// Write Yukkuri Voice Files if exists
FirstVideoConfig.sections.forEach((section) => {
	section.talks.forEach((talk) => {
		if (forceGenerate || !talk.id) {
			const id = uuidv4().replaceAll('-', '');
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
});

setTimeout(() => {
	fs.writeFileSync(
		`./transcripts/firstvideo.ts`,
		`import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = ${JSON.stringify(
			FirstVideoConfig
		)}`
	);
}, 3000);
