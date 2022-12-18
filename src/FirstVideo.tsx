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
			console.log(result);
			setTranstionVideoDurationFrames(
				Math.ceil(result.durationInSeconds * FPS)
			);
			setInitialized(true);
		});
	}, []);

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Audio src={staticFile(`audio/bgm/honobono-wartz.wav`)} volume={0.2} />
			<Video loop src={staticFile(`video/codebg.mp4`)} />
			<div style={logoStyle}>
				<Img src={staticFile('image/yukkurilogo.png')} />
			</div>

			<div style={jimakuBackground} />

			{initialized &&
				FirstVideoConfig.sections.map((section, index) => {
					const isFirst = index === 0;

					let cumulateFrames = 0;
					for (let i = 0; i < index; i++) {
						cumulateFrames += FirstVideoConfig.sections[index - 1].totalFrames;
					}

					const fromFrameMap = {...section.fromFramesMap};
					Object.keys(fromFrameMap).forEach((key) => {
						fromFrameMap[Number(key)] +=
							INITIAL_DELAY_FRAMES +
							cumulateFrames +
							transtionVideoDurationFrames * index;
					});

					return (
						<React.Fragment key={index}>
							<TalkSequence {...section} fromFramesMap={fromFrameMap} />
							<YukkuriSequence {...section} fromFramesMap={fromFrameMap} />
							{!isFirst && (
								<Sequence
									from={cumulateFrames}
									durationInFrames={transtionVideoDurationFrames}
								>
									<Video src={staticFile(`video/transition.mp4`)} />
								</Sequence>
							)}
						</React.Fragment>
					);
				})}
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
};
const logoStyle: React.CSSProperties = {
	position: 'absolute',
	top: '40px',
	left: '40px',
	opacity: 0.8,
};
