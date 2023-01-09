import * as fs from 'fs';
import {TALK_GAP_FRAMES} from '../src/constants';
import {getTotalFramesBeforeSection} from '../src/utils/getTotalFramesBeforeSection';
import {getTotalVideoFrames} from '../src/utils/getTotalVideoFrames';
import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export async function generateFaceFrameMap(videoConfig: VideoConfig) {
  const totalFrames = getTotalVideoFrames(videoConfig);
  const ReimuFaceByFrame = new Array(totalFrames).fill('default');
  const MarisaFaceByFrame = new Array(totalFrames).fill('default');

  videoConfig.sections.forEach((section, sectionIndex) => {
    const beforeFrames = getTotalFramesBeforeSection(videoConfig, sectionIndex);
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
}
