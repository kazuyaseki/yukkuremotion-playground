import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';

import AquesTalk10, {gVoice_F1} from 'node-aquestalk10';
import AqKanji2Koe from 'node-aqkanji2koe';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {staticFile} from 'remotion';
import {FPS, TALK_GAP_FRAMES} from '../src/constants';
import {getAudioDurationInSeconds} from 'get-audio-duration';

const aquestalk = new AquesTalk10(
	'./vendor/AquesTalk.framework/Versions/A/AquesTalk'
);
const aqkanji2koe = new AqKanji2Koe(
	'./vendor/AqKanji2Koe.framework/Versions/A/AqKanji2Koe',
	'./vendor/AqUsrDic.framework/Versions/A/AqUsrDic',
	'./vendor/aq_dic_large'
);

const ReimuVoice = {...gVoice_F1, lmd: 113, pitch: 84};
const MarisaVoice = {...gVoice_F1, lmd: 130, pitch: 84};

// Write Yukkuri Voice Files if exists
FirstVideoConfig.sections.forEach((section) => {
	section.talks.forEach((talk) => {
		if (!talk.id) {
			const id = uuidv4().replaceAll('-', '');
			const text = aqkanji2koe.AqKanji2KoeConvertUtf8(talk.text);
			const result = aquestalk.AquesTalkSyntheUtf16(
				talk.isReimu ? ReimuVoice : MarisaVoice,
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

	for (let i = 1; i < section.talks.length; i++) {
		getAudioDurationInSeconds(
			`./public/audio/yukkuri/${talks[i - 1].id}.wav`
		).then((durationSec) => {
			const frames = Math.floor((durationSec || 1) * FPS);

			cumulate += frames + TALK_GAP_FRAMES;
			section.fromFramesMap[i] = cumulate;
		});
	}
});

setTimeout(() => {
	fs.writeFileSync(
		`./transcripts/firstvideo.ts`,
		`type VideoConfig = {
	sections: {
		title: string;
    fromFramesMap: {[key in number]: number};
		talks: {text: string; isReimu: boolean; id?: string}[];
	}[];
};

export const FirstVideoConfig: VideoConfig = ${JSON.stringify(
			FirstVideoConfig
		)}`
	);
}, 4000);
