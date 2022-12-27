import {Subtitle} from '../src/Subtitle/Subtitle';

const GunyogunyoAnimation = () => (
	<style>
		{`@keyframes gunyogunyoAnimation {
        0% {
          transform: translateX(-50) translateY(39px) rotate(720deg);
        }
        50% {
          transform: translateX(50%) translateY(120px) rotate(720deg);
        }
        100% {
          transform: translateX(-50%) translateY(200px);
        }
      }`}
	</style>
);

export const CustomObjects = {
	gunyogunyo: () => {
		return (
			<div style={gunyogunyoStyle}>
				<GunyogunyoAnimation />
				<Subtitle>アニメーションしちゃうぞ〜〜〜〜〜</Subtitle>
			</div>
		);
	},
} as const;

const gunyogunyoStyle: React.CSSProperties = {
	animation: `gunyogunyoAnimation 2s infinite ease-in-out`,
	width: '100%',
	height: '240px',
	backgroundColor: 'rgba(255, 255, 255, 0.85)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export type CustomObjectKeys = keyof typeof CustomObjects;
