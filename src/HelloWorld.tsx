import {Audio, Img, spring, staticFile, Video} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Reimu} from './HelloWorld/Reimu';
import {ReimuSequence} from './HelloWorld/ReimuSequence';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

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
				<Sequence>
					<div style={jimakuBackground} />
				</Sequence>
				<Sequence>
					<p style={terop}>
						今日は Figma プラグイン
						<br />
						開発について解説していくよ
					</p>
				</Sequence>

				<Sequence>
					<Audio src={staticFile('audio/saisho.mp3')} />
				</Sequence>

				<ReimuSequence
					settings={[
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
						{durationInFrames: 3, eyeOpen: false},
						{durationInFrames: 3, eyeOpen: true},
					]}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const jimakuBackground: React.CSSProperties = {
	position: 'absolute',
	width: '100%',
	height: '240px',
	bottom: 0,
	backgroundColor: '#999',
};

const terop: React.CSSProperties = {
	fontWeight: 'bold',
	fontSize: 54,
	textAlign: 'center',
	WebkitTextStroke: '4px #222',
	color: '#fff',
	position: 'absolute',
	left: 0,
	bottom: 0,
	width: '100%',
};
