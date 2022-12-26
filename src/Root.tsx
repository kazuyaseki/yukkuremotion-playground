import {Composition} from 'remotion';
import {FPS} from './constants';
import {FirstVideo} from './FirstVideo';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="FirstVideo"
				component={FirstVideo}
				durationInFrames={600 * FPS}
				fps={FPS}
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
