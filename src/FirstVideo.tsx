import {Audio, Img, Sequence, staticFile, Video} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {TalkSequence} from './yukkuri/Talk/TalkSequence';
import {YukkuriSequence} from './yukkuri/YukkuriSequence';
import React from 'react';
import {FPS, SUBTITLE_HEIGHT_PX} from './constants';
import {VideoConfig} from './yukkuri/yukkuriVideoConfig';
import {getTotalFramesBeforeSection} from './utils/getTotalFramesBeforeSection';

export const FirstVideo: React.FC<{
	videoConfig: VideoConfig;
}> = ({videoConfig}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#000'}}>
			{videoConfig.sections.map((section, index) => {
				let cumulateFrames = getTotalFramesBeforeSection(videoConfig, index);

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
								<Audio src={staticFile(section.bgmSrc)} volume={0.18} loop />
							)}
							{section.backgroundVideo && (
								<>
									<Video loop src={staticFile(section.backgroundVideo)} muted />
									{section.showBgVideoOverlay && (
										<div
											style={{
												width: '100%',
												height: '100%',
												backgroundColor: 'rgba(0, 0, 0, 0.4)',
												backdropFilter: 'blur(4px)',
												zIndex: '0',
											}}
										></div>
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
								<Video
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
								<Video
									style={{zIndex: 10000}}
									src={staticFile(section.afterMovie)}
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
	backgroundColor: 'rgba(255, 255, 255, 0.85)',
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
