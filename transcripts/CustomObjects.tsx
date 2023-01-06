import {interpolate, useCurrentFrame} from 'remotion/.';
import {Subtitle} from '../src/Subtitle/Subtitle';

function GunyoGunyo() {
	const frame = useCurrentFrame();

	return (
		<div
			style={{
				...gunyogunyoStyle,
				transform: `translateX(${(frame % 100) - 50}) translateY(${
					frame % 200
				}px) rotate(${frame % 360}deg)`,
			}}
		>
			<Subtitle>アニメーションしちゃうぞ〜〜〜〜〜</Subtitle>
		</div>
	);
}

export const CustomObjects = {
	gunyogunyo: GunyoGunyo,
} as const;

const gunyogunyoStyle: React.CSSProperties = {
	width: '100%',
	height: '240px',
	backgroundColor: 'rgba(255, 255, 255, 0.85)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export type CustomObjectKeys = keyof typeof CustomObjects;
