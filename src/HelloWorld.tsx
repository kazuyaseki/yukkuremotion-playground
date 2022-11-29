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

				<Sequence durationInFrames={140}>
					<SubtitleWithBackground
						subtitle={
							<>
								今日はFigmaプラグイン開発
								<br />
								について解説していくよ
							</>
						}
					/>
				</Sequence>

				<Sequence from={140}>
					<SubtitleWithBackground
						subtitle={<>生産性をアゲアゲにしていこうネ</>}
					/>
				</Sequence>

				<Sequence>
					<Audio src={staticFile('audio/saisho.mp3')} />
				</Sequence>

				<Sequence from={140}>
					<Audio src={staticFile('audio/2.mp3')} />
				</Sequence>

				<ReimuSequence settings={[{durationInFrames: 300, eyeOpen: true}]} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
