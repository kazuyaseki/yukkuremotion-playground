import {
  Audio,
  Img,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {TalkSequence} from './yukkuri/Talk/TalkSequence';
import {YukkuriSequence} from './yukkuri/YukkuriSequence';
import React, {useMemo, useRef} from 'react';
import {SUBTITLE_HEIGHT_PX} from './constants';
import {VideoConfig} from './yukkuri/yukkuriVideoConfig';
import {getTotalFramesBeforeSection} from './utils/getTotalFramesBeforeSection';
import {LoopedOffthreadVideo} from './components/LoopedOffthreadVideo';
import {getTotalVideoFrames} from './utils/getTotalVideoFrames';

export const FirstVideo: React.FC<{
  videoConfig: VideoConfig;
}> = ({videoConfig}) => {
  const frame = useCurrentFrame();

  const totalVideoFrame = useRef(getTotalVideoFrames(videoConfig));

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {videoConfig.sections.map((section, index) => {
        const cumulateFrames = getTotalFramesBeforeSection(videoConfig, index);

        const fromFrameMap = {...section.fromFramesMap};
        Object.keys(fromFrameMap).forEach((key) => {
          fromFrameMap[Number(key)] += cumulateFrames;
        });

        return (
          <React.Fragment key={index}>
            <Sequence
              from={cumulateFrames}
              durationInFrames={
                section.totalFrames - (section.afterMovieFrames || 0)
              }
            >
              {section.bgmSrc && (
                <Audio
                  loop
                  src={staticFile(section.bgmSrc)}
                  // eslint-disable-next-line
                  volume={section.bgmVolume || 0.32}
                />
              )}
              {section.backgroundVideo && (
                <>
                  <LoopedOffthreadVideo
                    isMuted
                    src={staticFile(section.backgroundVideo)}
                  />
                  {section.showBgVideoOverlay && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(4px)',
                        zIndex: '0',
                      }}
                    />
                  )}
                </>
              )}
            </Sequence>

            <TalkSequence
              {...section}
              fromFramesMap={fromFrameMap}
              totalFrames={cumulateFrames + section.totalFrames}
            />

            <YukkuriSequence {...section} fromFramesMap={fromFrameMap} />

            {section.beforeMovie && (
              <Sequence
                from={cumulateFrames}
                durationInFrames={fromFrameMap[0]}
              >
                <OffthreadVideo
                  style={{zIndex: 100}}
                  src={staticFile(section.beforeMovie)}
                />
              </Sequence>
            )}
            {section.afterMovie && section.afterMovieFrames && (
              <Sequence
                from={
                  cumulateFrames +
                  section.totalFrames -
                  section.afterMovieFrames +
                  (section.afteMovieDelay || 0)
                }
                durationInFrames={section.afterMovieFrames}
              >
                <OffthreadVideo
                  style={{zIndex: 10000}}
                  src={staticFile(section.afterMovie)}
                  volume={section.afterMovieVolume}
                />
              </Sequence>
            )}
          </React.Fragment>
        );
      })}

      <div style={logoStyle}>
        <Img src={staticFile('image/yukkurilogo.png')} />
      </div>

      <div style={jimakuBackground} />
    </AbsoluteFill>
  );
};

const jimakuBackground: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: `${SUBTITLE_HEIGHT_PX}px`,
  bottom: 0,
  backgroundImage: `url(${staticFile('image/telop/Cyber_telop2_black.png')})`,
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
};
const logoStyle: React.CSSProperties = {
  position: 'absolute',
  top: '40px',
  left: '40px',
  opacity: 0.8,
  zIndex: 1,
};
