import {getVideoMetadata} from '@remotion/media-utils';
import React, {useEffect, useState} from 'react';
import {
	continueRender,
	delayRender,
	Loop,
	OffthreadVideo,
	staticFile,
	useVideoConfig,
} from 'remotion';

type Props = {
	src: string;
	isMuted?: boolean;
};

export const LoopedOffthreadVideo: React.FC<Props> = ({src, isMuted}) => {
	const [duration, setDuration] = useState<null | number>(null);
	const [handle] = useState(() => delayRender());
	const {fps} = useVideoConfig();

	useEffect(() => {
		getVideoMetadata(src)
			.then(({durationInSeconds}) => {
				setDuration(durationInSeconds);
				continueRender(handle);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [handle]);

	if (duration === null) {
		return null;
	}

	return (
		<Loop durationInFrames={Math.floor(fps * duration)}>
			<OffthreadVideo src={src} muted={isMuted} />
		</Loop>
	);
};
