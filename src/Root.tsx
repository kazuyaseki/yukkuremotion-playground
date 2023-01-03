import {Composition} from 'remotion';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {FPS} from './constants';
import {FirstVideo} from './FirstVideo';
import {TransitionSpace} from './sozai/TransitionSpace';
import {getTotalVideoFrames} from './utils/getTotalVideoFrames';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="FirstVideo"
				component={FirstVideo}
				durationInFrames={getTotalVideoFrames(FirstVideoConfig)}
				fps={FPS}
				width={1920}
				height={1080}
				defaultProps={{videoConfig: FirstVideoConfig}}
			/>
			<Composition
				id="TestEncoding"
				component={FirstVideo}
				durationInFrames={FirstVideoConfig.sections[0].totalFrames}
				fps={FPS}
				width={1920}
				height={1080}
				defaultProps={{
					videoConfig: {
						...FirstVideoConfig,
						sections: [FirstVideoConfig.sections[0]],
					},
				}}
			/>
			<Composition
				id="TransitionSpace"
				component={TransitionSpace}
				durationInFrames={180}
				fps={FPS}
				width={1920}
				height={1080}
			/>
		</>
	);
};
