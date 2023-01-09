import * as fs from 'fs';
import fsExtra from 'fs-extra';

import {FirstVideoConfig} from '../transcripts/firstvideo';
import {generateYukkuriAudios} from './generateYukkuriAudios';
import {addAudioDurations} from './addAudioDurations';
import {generateFromFramesMap} from './generateFromFramesMap';
import {generateFaceFrameMap} from './generateFaceFrameMap';
import {generateMouthFrameMap} from './generateMouthFrameMap';

const forceGenerate = process.argv[2] === 'force';

if (forceGenerate) {
  fsExtra.emptyDirSync('./public/audio/yukkuri');
}

generateYukkuriAudios(FirstVideoConfig, forceGenerate);

(async () => {
  await addAudioDurations(FirstVideoConfig);
  await generateFromFramesMap(FirstVideoConfig);

  fs.writeFileSync(
    `./transcripts/firstvideo.tsx`,
    `import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = ${JSON.stringify(FirstVideoConfig)}
        `
  );

  generateFaceFrameMap(FirstVideoConfig);
  generateMouthFrameMap(FirstVideoConfig);
})();
