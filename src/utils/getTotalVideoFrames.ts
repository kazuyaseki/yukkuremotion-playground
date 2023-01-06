import {VideoConfig} from '../yukkuri/yukkuriVideoConfig';

export function getTotalVideoFrames(videoConfig: VideoConfig) {
	return videoConfig.sections.reduce((prev, current) => {
		return prev + current.totalFrames;
	}, 0);
}
