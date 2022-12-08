const fuyofuyoFrequencyPx = 3;
const fuyofuyoAnimationName = 'fuyofuyoAnimation';

export const fuyofuyoAnimationCss: React.CSSProperties = {
	animation: `${fuyofuyoAnimationName} 2s infinite ease-in-out`,
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
