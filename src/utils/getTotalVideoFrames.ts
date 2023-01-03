import {VideoConfig} from '../yukkuri/yukkuriVideoConfig';

export function getTotalVideoFrames(videoConfig: VideoConfig) {
	return videoConfig.sections.reduce((prev, current) => {
		return (
			prev +
			(current.afterMovieFrames || 0) +
			current.totalFrames +
			(current.beforeMovieFrames || 0)
		);
	}, 0);
}
