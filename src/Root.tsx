import {Composition} from 'remotion';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {FPS} from './constants';
import {YukkuriVideo} from './YukkuriVideo';
import {loadFont} from './load-fonts';
import {TransitionSpace} from './sozai/TransitionSpace';
import {getTotalVideoFrames} from './utils/getTotalVideoFrames';

export const RemotionRoot: React.FC = () => {
  loadFont();

  return (
    <>
      <Composition
        id="FirstVideo"
        component={YukkuriVideo}
        durationInFrames={getTotalVideoFrames(FirstVideoConfig)}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{videoConfig: FirstVideoConfig}}
      />
      <Composition
        id="TestEncoding"
        component={YukkuriVideo}
        durationInFrames={FirstVideoConfig.sections[0].totalFrames}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{
          videoConfig: {
            ...FirstVideoConfig,
            sections: [FirstVideoConfig.sections[0]],
          },
        }}
      />
      <Composition
        id="TransitionSpace"
        component={TransitionSpace}
        durationInFrames={180}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
