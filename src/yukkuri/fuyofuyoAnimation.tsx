const fuyofuyoFrequencyPx = 2;
const fuyofuyoAnimationName = 'fuyofuyoAnimation';

export const fuyofuyoAnimationDurationSec = 3;

export const fuyofuyoAnimationCss: React.CSSProperties = {
	animation: `${fuyofuyoAnimationName} ${fuyofuyoAnimationDurationSec}s infinite ease-in-out`,
	transform: `translateY(${fuyofuyoFrequencyPx}%)`,
};

export const FuyoFuyoAnimationStyle = () => (
	<style>
		{`@keyframes ${fuyofuyoAnimationName} {
        0% {
          transform: translateY(${fuyofuyoFrequencyPx}%);
        }
        50% {
          transform: translateY(-${fuyofuyoFrequencyPx}%);
        }
        100% {
          transform: translateY(${fuyofuyoFrequencyPx}%);
        }
      }`}
	</style>
);
