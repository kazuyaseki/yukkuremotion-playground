import * as fs from 'fs';

import AquesTalk10, {gVoice_F1} from 'node-aquestalk10';
import AqKanji2Koe from 'node-aqkanji2koe';
import {AqKanji2KoeSetDevKey, Aquestalk10DevKey} from './aquest-keys';

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

const text = 'これは、テストの音声だよ';
const isReimu = false;

const ReimuVoice = {
	base: 0,
	speed: 65,
	volume: 100,
	pitch: 40,
	accent: 50,
	lmd: 54,
	fsc: 170,
};
const MarisaVoice = {...gVoice_F1, base: 1, speed: 105, lmd: 10, pitch: 84};

// Write Yukkuri Voice Files if exists
const koeText = aqkanji2koe.AqKanji2KoeConvertUtf8(text);
const result = aquestalk.AquesTalkSyntheUtf16(
	isReimu ? ReimuVoice : MarisaVoice,
	koeText
);
const filename = `test.wav`;
fs.writeFileSync(`./public/audio/yukkuri/test/${filename}`, result);
