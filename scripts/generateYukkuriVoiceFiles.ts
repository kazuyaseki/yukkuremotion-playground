import {yukkuriVoice} from '../yukkuriVoices';
import * as fs from 'fs';

import AquesTalk10, {gVoice_F1} from 'node-aquestalk10';
import AqKanji2Koe from 'node-aqkanji2koe';

const aquestalk = new AquesTalk10(
	'./vendor/AquesTalk.framework/Versions/A/AquesTalk'
);
const aqkanji2koe = new AqKanji2Koe(
	'./vendor/AqKanji2Koe.framework/Versions/A/AqKanji2Koe',
	'./vendor/AqUsrDic.framework/Versions/A/AqUsrDic',
	'./vendor/aq_dic_large'
);

const voice = {...gVoice_F1, lmd: 113, pitch: 84};

Object.keys(yukkuriVoice).forEach((key) => {
	const text = aqkanji2koe.AqKanji2KoeConvertUtf8(yukkuriVoice[key].text);
	const result = aquestalk.AquesTalkSyntheUtf16(voice, text);
	const filename = `${key}.wav`;
	fs.writeFileSync(`./public/audio/${filename}`, result);
});
