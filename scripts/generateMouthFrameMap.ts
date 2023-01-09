import {getTotalVideoFrames} from '../src/utils/getTotalVideoFrames';
import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';
import * as fs from 'fs';
import {TALK_GAP_FRAMES} from '../src/constants';
import {getTotalFramesBeforeSection} from '../src/utils/getTotalFramesBeforeSection';

export async function generateMouthFrameMap(videoConfig: VideoConfig) {
  const totalFrames = getTotalVideoFrames(videoConfig);

  const ReimuMouthByFrame = new Array(totalFrames).fill('05');
  const MarisaMouthByFrame = new Array(totalFrames).fill('05');

  videoConfig.sections.forEach((section, sectionIndex) => {
    const beforeFrames = getTotalFramesBeforeSection(videoConfig, sectionIndex);
    section.talks.forEach((talk, index) => {
      const startFrame = beforeFrames + section.fromFramesMap[index];
      for (let i = startFrame; i < startFrame + talk.audioDurationFrames; i++) {
        if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'reimu') {
          if (talk.mouth) {
            for (
              let i = startFrame;
              i <= startFrame + talk.audioDurationFrames + TALK_GAP_FRAMES;
              i++
            ) {
              ReimuMouthByFrame[i] = talk.mouth;
            }
          } else {
            for (
              let i = startFrame;
              i <= startFrame + talk.audioDurationFrames;
              i++
            ) {
              const index = Math.abs(3 - ((i - startFrame) % 6));
              let imageIndex = 6;
              // eslint-disable-next-line
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
                default:
                  imageIndex = 0;
              }
              ReimuMouthByFrame[i] = imageIndex.toString().padStart(2, '0');
            }
          }
        }
        if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'marisa') {
          if (talk.mouth) {
            for (
              let i = startFrame;
              i <= startFrame + talk.audioDurationFrames + TALK_GAP_FRAMES;
              i++
            ) {
              MarisaMouthByFrame[i] = talk.mouth;
            }
          } else {
            for (
              let i = startFrame;
              i <= startFrame + talk.audioDurationFrames;
              i++
            ) {
              const index = Math.abs(3 - ((i - startFrame) % 6));
              let imageIndex = 5;
              // eslint-disable-next-line
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
                case 3:
                  imageIndex = 5;
                  break;
                default:
                  imageIndex = 0;
              }
              MarisaMouthByFrame[i] = imageIndex.toString().padStart(2, '0');
            }
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
}
