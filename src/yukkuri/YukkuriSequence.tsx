import {useEffect, useMemo, useRef, useState} from 'react';
import {interpolate, Sequence, useCurrentFrame} from 'remotion';
import {FPS, TALK_GAP_FRAMES} from '../constants';
import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';
import {YukkuriFace} from './Face/YukkuriFace';
import {kuchipakuMap, SPEAKER, VoiceConfig} from './yukkuriVideoConfig';

export type Props = {
	kuchipackuMap: kuchipakuMap;
	reimuKuchipakuMap: kuchipakuMap;
	marisaKuchipakuMap: kuchipakuMap;
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
};

function getTalkIntervals(
	talks: VoiceConfig[],
	fromFramesMap: {[key in number]: number}
) {
	const reimuFrames = {
		frames: [0],
		imageIndexes: [6],
	};

	const marisaFrames = {
		frames: [0],
		imageIndexes: [5],
	};

	talks.forEach((talk, index) => {
		const start = fromFramesMap[index];
		const end = start + talk.audioDurationFrames;

		if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'reimu') {
			for (let i = 0; i <= talk.audioDurationFrames; i++) {
				reimuFrames.frames.push(i + start);
				const index = Math.abs(6 - (i % 12));
				reimuFrames.imageIndexes.push(index);
			}
		}
		if (talk.speaker === 'reimuAndMarisa' || talk.speaker === 'marisa') {
			for (let i = 0; i <= talk.audioDurationFrames; i++) {
				marisaFrames.frames.push(i + start);
				const index = Math.abs(5 - (i % 10));
				marisaFrames.imageIndexes.push(index);
			}
		}
	});

	console.log({
		reimuFrames,
		marisaFrames,
	});

	return {
		reimuFrames,
		marisaFrames,
	};
}

export const YukkuriSequence: React.FC<Props> = ({
	reimuKuchipakuMap,
	marisaKuchipakuMap,
	talks,
	fromFramesMap,
}) => {
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
			if (talk.speaker === SPEAKER.reimu) {
				setReimuFace(talk.face || 'default');
			} else {
				setMarisaFace(talk.face || 'default');
			}

			if (talk.speaker === SPEAKER.reimu) {
				setIsReimuTalking(true);
			} else if (talk.speaker === SPEAKER.marisa) {
				setIsMarisaTalking(true);
			}

			const talkDurationsMsec = (talk.audioDurationFrames / FPS) * 1000;
			console.log(talkDurationsMsec);
			setTimeout(() => {
				console.log('setTimeout の中身が実行', talk.text);
				if (talk.speaker === SPEAKER.reimu) {
					setIsReimuTalking(false);
				} else {
					setIsMarisaTalking(false);
				}
			}, talkDurationsMsec);

			talkIndex.current++;
		}
	}, [frame, fromFramesMap, talks]);

	const intervals = useMemo(
		() => getTalkIntervals(talks, fromFramesMap),
		[talks, fromFramesMap]
	);

	return (
		<Sequence>
			<div style={reimuStyle}>
				<YukkuriFace
					isReimu
					face={reimuFace}
					isTalking={isReimuTalking}
					kuchipakuMap={reimuKuchipakuMap}
				/>
			</div>
			<div style={marisaStyle}>
				<YukkuriFace
					isReimu={false}
					face={marisaFace}
					isTalking={isMarisaTalking}
					kuchipakuMap={marisaKuchipakuMap}
				/>
			</div>
		</Sequence>
	);
};

const reimuStyle: React.CSSProperties = {
	position: 'absolute',
	right: '20px',
	bottom: '135px',
	zIndex: 10,
};

const marisaStyle: React.CSSProperties = {
	position: 'absolute',
	left: '20px',
	bottom: '135px',
	zIndex: 10,
};
