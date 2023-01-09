import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';

import {
  SPEAKER,
  SPEAKER_TYPE,
  VideoConfig,
} from '../src/yukkuri/yukkuriVideoConfig';
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

const SPEED = 115;

const ReimuVoice = {
  base: 0, // 声種
  volume: 100, // 音量
  pitch: 95, // 高さ
  accent: 80, // アクセント
  lmd: 110, // 声質
  fsc: 103, // 音程
  speed: SPEED,
};
const MarisaVoice = {...gVoice_F1, base: 0, speed: SPEED, lmd: 130, pitch: 75};

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

export function generateYukkuriAudios(
  videoConfig: VideoConfig,
  forceGenerate: boolean
) {
  // Write Yukkuri Voice Files if exists
  videoConfig.sections.forEach((section) => {
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
}
