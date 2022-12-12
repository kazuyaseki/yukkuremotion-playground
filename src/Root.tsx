import {Composition, Sequence} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="OnlyLogo"
				component={() => {
					return <div>こんにちは</div>;
				}}
				durationInFrames={1500}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={1500}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
