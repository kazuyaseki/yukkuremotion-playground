import {useEffect, useRef, useState} from 'react';
import {Sequence, useCurrentFrame} from 'remotion';
import {VoiceConfig} from '../../yukkuriVoices';
import {FPS, TALK_GAP_FRAMES} from '../constants';
import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';
import {YukkuriFace} from './Face/YukkuriFace';

export type Props = {
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
};

export const YukkuriSequence: React.FC<Props> = ({talks, fromFramesMap}) => {
	const [reimuFace, setReimuFace] = useState<FACE_TYPE>('default');
	const [marisaFace, setMarisaFace] = useState<FACE_TYPE>('default');
	const talkIndex = useRef(0);

	const [isReimuTalking, setIsReimuTalking] = useState(false);
	const [isMarisaTalking, setIsMarisaTalking] = useState(false);

	const frame = useCurrentFrame();

	// Reset index when rewind during development
	useEffect(() => {
		if (frame === 0) {
			talkIndex.current = 0;
		}
	}, [frame]);

	useEffect(() => {
		const fromFrame = fromFramesMap[talkIndex.current];

		if (fromFrame === frame) {
			const talk = talks[talkIndex.current];
			if (talk.isReimu) {
				setReimuFace(talk.face || 'default');
			} else {
				setMarisaFace(talk.face || 'default');
			}

			if (talk.isReimu) {
				setIsReimuTalking(true);
			} else {
				setIsMarisaTalking(true);
			}
			const nextFromFrame = fromFramesMap[talkIndex.current + 1];
			const durationFrames = nextFromFrame - fromFrame - TALK_GAP_FRAMES;

			const talkDurationsMsec = (durationFrames / FPS) * 1000;
			setTimeout(() => {
				if (talk.isReimu) {
					setIsReimuTalking(false);
				} else {
					setIsMarisaTalking(false);
				}
			}, talkDurationsMsec);

			talkIndex.current++;
		}
	}, [frame, fromFramesMap, talks]);

	return (
		<Sequence>
			<div style={reimuStyle}>
				<YukkuriFace isReimu face={reimuFace} isTalking={isReimuTalking} />
			</div>
			<div style={marisaStyle}>
				<YukkuriFace
					isReimu={false}
					face={marisaFace}
					isTalking={isMarisaTalking}
				/>
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
