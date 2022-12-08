import {spring, staticFile} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {ReimuSequence} from './yukkuri/Face/ReimuSequence';
import {TalkSequence} from './yukkuri/Talk/TalkSequrnce';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {getAudioData} from '@remotion/media-utils';
import {FPS, TALK_GAP_FRAMES} from './constants';
import {YukkuriSequence} from './yukkuri/YukkuriSequence';
import React from 'react';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{opacity}}>
				<AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
					<Logo />
				</AbsoluteFill>

				{FirstVideoConfig.sections.map((section, index) => {
					return (
						<React.Fragment key={index}>
							<TalkSequence {...section} />
							<YukkuriSequence {...section} />
						</React.Fragment>
					);
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
