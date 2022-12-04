import {Sequence} from 'remotion';
import {YukkuriFace, ReimuProps} from './YukkuriFace';

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
						<YukkuriFace {...setting} />
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
