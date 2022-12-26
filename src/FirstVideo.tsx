import {Audio, Img, Sequence, staticFile, Video} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {TalkSequence} from './yukkuri/Talk/TalkSequence';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {YukkuriSequence} from './yukkuri/YukkuriSequence';
import React, {useEffect, useRef, useState} from 'react';
import {FPS, SUBTITLE_HEIGHT_PX} from './constants';
import {getVideoMetadata} from '@remotion/media-utils';

const INITIAL_DELAY_FRAMES = 30;

export const FirstVideo: React.FC<{
	titleText: string;
	titleColor: string;
}> = () => {
	const [transtionVideoDurationFrames, setTranstionVideoDurationFrames] =
		useState(0);

	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		getVideoMetadata(staticFile(`video/transition.mp4`)).then((result) => {
			setTranstionVideoDurationFrames(
				Math.ceil(result.durationInSeconds * FPS)
			);
			setInitialized(true);
		});
	}, []);

	return (
		<AbsoluteFill style={{backgroundColor: '#000'}}>
			{initialized &&
				FirstVideoConfig.sections.map((section, index) => {
					const isFirst = index === 0;

					let cumulateFrames = 0;
					for (let i = 0; i < index; i++) {
						cumulateFrames += FirstVideoConfig.sections[i].totalFrames;
					}

					cumulateFrames +=
						INITIAL_DELAY_FRAMES + transtionVideoDurationFrames * index;

					const fromFrameMap = {...section.fromFramesMap};
					Object.keys(fromFrameMap).forEach((key) => {
						fromFrameMap[Number(key)] += cumulateFrames;
					});

					return (
						<React.Fragment key={index}>
							<Sequence
								from={cumulateFrames}
								durationInFrames={section.totalFrames}
							>
								{section.bgmSrc && (
									<Audio src={staticFile(section.bgmSrc)} volume={0.2} />
								)}
								{section.backgroundVideo && (
									<Video loop src={staticFile(section.backgroundVideo)} />
								)}
							</Sequence>

							<TalkSequence {...section} fromFramesMap={fromFrameMap} />
							<YukkuriSequence
								{...section}
								fromFramesMap={fromFrameMap}
								kuchipackuMap={section.kuchipakuMap}
							/>

							{!isFirst && (
								<Sequence
									from={cumulateFrames - transtionVideoDurationFrames}
									durationInFrames={transtionVideoDurationFrames}
								>
									<Video
										style={{zIndex: 100}}
										src={staticFile(`video/transition.mp4`)}
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
};
