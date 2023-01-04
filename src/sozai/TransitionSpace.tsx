import {
	Audio,
	Img,
	interpolate,
	OffthreadVideo,
	Sequence,
	staticFile,
	useCurrentFrame,
	Video,
} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React, {useEffect, useRef, useState} from 'react';
import {Face, PureFace} from '../yukkuri/Face/YukkuriFace';

export const TransitionSpace = () => {
	const frame = useCurrentFrame();

	const translateY = interpolate(frame, [0, 180], [0, -550]);
	const translateX = interpolate(frame, [0, 180], [0, 1120]);
	const rotate = interpolate(frame, [0, 180], [-120, 60]);

	return (
		<AbsoluteFill style={{backgroundColor: '#000'}}>
			<OffthreadVideo src={staticFile('video/transition-space.mp4')} />

			<div
				style={{
					...yukkuri,
					transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg)`,
				}}
			>
				<PureFace
					eyeImage="05"
					mouthImage="05"
					faceSizePx={200}
					imageDirectory="reimu"
				/>
			</div>
		</AbsoluteFill>
	);
};

const yukkuri: React.CSSProperties = {
	position: 'absolute',
	bottom: '150px',
	left: '-240px',
	opacity: 0.95,
	zIndex: 1,
};
