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
							subtitle: (
								<>
									今日はFigmaプラグイン開発
									<br />
									について解説していくよ
								</>
							),
							audioFilePath: 'audio/saisho.mp3',
						},
						{
							subtitle: '生産性をアゲアゲにしていこうネ',
							audioFilePath: 'audio/2.mp3',
						},
					]}
				/>

				<ReimuSequence
					settings={[
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: true},
						{durationInFrames: 9, eyeOpen: true, mouthOpen: false},
					]}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
