import {useEffect, useRef, useState} from 'react';
import {Sequence, Series, useCurrentFrame} from 'remotion';
import {VoiceConfig} from '../../yukkuriVoices';
import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';
import {YukkuriFace} from './Face/YukkuriFace';

export type Props = {
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
};

export const YukkuriSequence: React.FC<Props> = ({talks, fromFramesMap}) => {
	const [reimuFace, setReimuFace] = useState<FACE_TYPE>('atyaa');
	const talkIndex = useRef(0);

	const frame = useCurrentFrame();

	useEffect(() => {
		const fromFrame = fromFramesMap[talkIndex.current + 1];

		if (fromFrame === frame) {
			setReimuFace(talks[talkIndex.current].face || 'default');
			talkIndex.current++;
		}
	}, [frame, fromFramesMap, talks]);

	return (
		<Sequence>
			<div style={reimuStyle}>
				<YukkuriFace isReimu face={reimuFace} />
			</div>
			<div style={marisaStyle}>
				<YukkuriFace isReimu={false} face={reimuFace} />
			</div>
		</Sequence>
	);
};

const reimuStyle: React.CSSProperties = {
	position: 'absolute',
	right: '30px',
	bottom: '120px',
};

const marisaStyle: React.CSSProperties = {
	position: 'absolute',
	left: '30px',
	bottom: '120px',
};
