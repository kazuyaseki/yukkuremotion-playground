import {Audio, Img, staticFile, Video} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {TalkSequence} from './yukkuri/Talk/TalkSequrnce';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {YukkuriSequence} from './yukkuri/YukkuriSequence';
import React from 'react';

const INITIAL_DELAY_FRAMES = 30;

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Audio src={staticFile(`audio/bgm/honobono-wartz.wav`)} volume={0.08} />
			<Video loop src={staticFile(`video/codebg.mp4`)} />
			<div style={logoStyle}>
				<Img src={staticFile('image/yukkurilogo.png')} />
			</div>

			<div style={jimakuBackground} />

			{FirstVideoConfig.sections.map((section, index) => {
				const fromFrameMap = {...section.fromFramesMap};
				Object.keys(fromFrameMap).forEach((key) => {
					fromFrameMap[Number(key)] += INITIAL_DELAY_FRAMES;
				});

				return (
					<React.Fragment key={index}>
						<TalkSequence {...section} fromFramesMap={fromFrameMap} />
						<YukkuriSequence {...section} fromFramesMap={fromFrameMap} />
					</React.Fragment>
				);
			})}
		</AbsoluteFill>
	);
};

const jimakuBackground: React.CSSProperties = {
	position: 'absolute',
	width: '100%',
	height: '240px',
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
