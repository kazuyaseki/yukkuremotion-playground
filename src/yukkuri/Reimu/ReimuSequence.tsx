import {Sequence} from 'remotion';
import {Reimu, ReimuProps} from './Reimu';

type Props = {
	settings: (ReimuProps & {
		durationInFrames: number;
	})[];
};

export const ReimuSequence: React.FC<Props> = ({settings}) => {
	return (
		<>
			{settings.map((setting, index) => (
				<Sequence
					durationInFrames={setting.durationInFrames}
					from={settings.slice(0, index).reduce((prev, current) => {
						return prev + current.durationInFrames;
					}, 0)}
				>
					<div style={containerStyle}>
						<Reimu {...setting} />
					</div>
				</Sequence>
			))}
		</>
	);
};

const containerStyle: React.CSSProperties = {
	position: 'absolute',
	right: '30px',
	bottom: '120px',
};
