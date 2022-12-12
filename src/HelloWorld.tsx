import {Audio, staticFile, Video} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {TalkSequence} from './yukkuri/Talk/TalkSequrnce';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {YukkuriSequence} from './yukkuri/YukkuriSequence';
import React from 'react';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Audio src={staticFile(`audio/bgm/honobono-wartz.wav`)} volume={0.08} />
			<Video loop src={staticFile(`video/codebg.mp4`)} />

			<div style={jimakuBackground} />

			{FirstVideoConfig.sections.map((section, index) => {
				return (
					<React.Fragment key={index}>
						<TalkSequence {...section} />
						<YukkuriSequence {...section} />
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
	backgroundColor: 'rgba(255, 255, 255, 0.9)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};
