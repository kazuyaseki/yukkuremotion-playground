import {Composition} from 'remotion';
import {FirstVideoConfig} from '../transcripts/firstvideo';
import {FPS} from './constants';
import {FirstVideo} from './FirstVideo';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="FirstVideo"
				component={FirstVideo}
				durationInFrames={FirstVideoConfig.sections.reduce((prev, current) => {
					return (
						prev +
						(current.afterMovieFrames || 0) +
						current.totalFrames +
						(current.beforeMovieFrames || 0)
					);
				}, 0)}
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
		</>
	);
};
