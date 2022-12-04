import {Audio, Img, spring, staticFile, Video} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {SubtitleWithBackground} from './Subtitle/SubtitleBackground';
import {ReimuSequence} from './yukkuri/Reimu/ReimuSequence';
import {Talk} from './yukkuri/Talk';
import {TalkSequence} from './yukkuri/Talk/TalkSequrnce';
import AquesTalk10 from './yukkuri/Auestalk10';
import {useEffect, useState} from 'react';
import * as path from 'path';
import {yukkuriVoice} from '../yukkuriVoices';

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

				<TalkSequence
					talks={[
						{
							voiceConfig: yukkuriVoice.neneemarisa,
						},
						{
							voiceConfig: yukkuriVoice.nandareimu,
						},
					]}
				/>

				<ReimuSequence
					settings={[
						{durationInFrames: 200, isEyeOpen: true, isKuchipaku: true},
					]}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
