import {Composition} from 'remotion';
import {FirstVideo} from './FirstVideo';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="FirstVideo"
				component={FirstVideo}
				durationInFrames={3000}
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
