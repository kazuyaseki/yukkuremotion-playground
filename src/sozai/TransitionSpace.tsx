import {
	Audio,
	Img,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
	Video,
} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React, {useEffect, useRef, useState} from 'react';
import {Face} from '../yukkuri/Face/YukkuriFace';

export const TransitionSpace: React.FC<{}> = ({}) => {
	const frame = useCurrentFrame();

	const translateY = interpolate(frame, [0, 180], [0, -480]);
	const translateX = interpolate(frame, [0, 180], [0, 1620]);
	const rotate = interpolate(frame, [0, 180], [-120, 60]);

	return (
		<AbsoluteFill style={{backgroundColor: '#000'}}>
			<Video src={staticFile('video/transition-space.mp4')} />

			<div
				style={{
					...yukkuri,
					transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg)`,
				}}
			>
				<Face
					face={'default'}
					sizePx={200}
					imageDirectory={'reimu'}
					isReimu={true}
					kuchipakuMap={{frames: [0, 1], amplitude: [6, 6]}}
				/>
			</div>
		</AbsoluteFill>
	);
};

const yukkuri: React.CSSProperties = {
	position: 'absolute',
	bottom: '200px',
	left: '-40px',
	opacity: 0.95,
	zIndex: 1,
};
