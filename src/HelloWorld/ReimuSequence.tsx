import {Sequence} from 'remotion';
import {Reimu} from './Reimu';
import {FACE_TYPE} from './ReimuImagePaths/faceImagePaths';

type Props = {
	settings: {face?: FACE_TYPE; eyeOpen: boolean; durationInFrames: number}[];
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
						<Reimu face={setting.face} eyeOpen={setting.eyeOpen} />
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
