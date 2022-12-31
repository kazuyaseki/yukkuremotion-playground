import {useEffect, useMemo, useRef, useState} from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';
import {FPS} from '../../constants';
import {
	fuyofuyoAnimationCss,
	fuyofuyoAnimationDurationSec,
	FuyoFuyoAnimationStyle,
} from '../fuyofuyoAnimation';
import {eyeImagePaths} from './ImagePaths/eyeImagePaths';
import {faceImagePaths, FACE_TYPE} from './ImagePaths/faceImagePaths';

export type MOUTH_TYPE = 'OPEN' | 'CLOSE';

// FIXME: face を string literal type にする
export type ReimuProps = {
	face?: string;
	isEyeOpen?: boolean;
	isMouthOpen?: boolean;
	sizePx?: number;
	isKuchipaku?: boolean;
	isReimu?: boolean;
	isTalking: boolean;
	mouth?: MOUTH_TYPE;
};

const DEFAULT_REIMU_SIZE_PX = 320;

const KUCHIPAKU_INTERVAL_MSEC = 150;

const MATABATAKI_INTERVAL_FRAMES = FPS * 5;

export const YukkuriFace: React.FC<ReimuProps> = ({
	face,
	sizePx,
	isReimu,
	isTalking,
	mouth,
}) => {
	const [isMabataking, setIsMabataking] = useState(false);

	const frame = useCurrentFrame();

	useEffect(() => {
		if (frame % MATABATAKI_INTERVAL_FRAMES === 0) {
			setIsMabataking(true);
		}
	}, [isMabataking, frame]);

	const imageDirectory = useMemo(
		() => (isReimu ? 'reimu' : 'marisa'),
		[isReimu]
	);

	console.log(mouth);

	return (
		<>
			<FuyoFuyoAnimationStyle />
			<Face
				face={face}
				sizePx={sizePx}
				imageDirectory={imageDirectory}
				isReimu={isReimu}
				mouth={
					mouth
						? mouth === 'OPEN'
							? '05'
							: '00'
						: defaultMouth[face || ''] || '05'
				}
			/>
		</>
	);
};

const eyeImage: {[key in string]: string} = {
	default: '05',
	nikkori: '06',
	wink: '07',
	ryomeWink: '08',
	kyomu: '09',
	mangaNikkori: '10',
	shonbori: '11',
	kirakira: '12',
	angry: '13',
	pokan: '14',
	ryomeNikkori: '15',
	komari: '16',
	komariKatame: '17',
	hokkori: '18',
	karukuhiiteru: '19',
	zitome: '20',
	ryomeTojiIkari: '21',
	uruuru: '22',
	namida: '23',
	shorime: '24',
	massao: '26',
	huteki: '27',
	donbiki: '28',
	saranidonbiki: '29',
	daradaraAse: '30',
} as const;

const defaultMouth: {[key in keyof typeof eyeImage]: string} = {
	default: '05',
	nikkori: '06',
	wink: '07',
	ryomeWink: '08',
	kyomu: '09',
	mangaNikkori: '10',
	shonbori: '11',
	kirakira: '12',
	angry: '13',
	pokan: '14',
	ryomeNikkori: '15',
	komari: '16',
	komariKatame: '17',
	hokkori: '18',
	karukuhiiteru: '19',
	zitome: '20',
	ryomeTojiIkari: '21',
	uruuru: '22',
	namida: '23',
	shorime: '24',
	massao: '26',
	huteki: '27',
	donbiki: '28',
	saranidonbiki: '29',
	daradaraAse: '30',
};

const MABATAKI_INTERVAL_SECONDS = 7;
const MABATAKI_ANIMATION_INTERVAL_FRAME = 1;

export const Face = (props: {
	face?: string;
	mouth?: string;
	sizePx?: number;
	isReimu?: boolean;
	imageDirectory: string;
}) => {
	const {face, mouth, sizePx, isReimu, imageDirectory} = props;

	// Multiply by 1.2 because Marisa is bit smaller compared to Reimu
	const faceSizePx =
		(sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX) * (isReimu ? 1.0 : 1.2);

	const [eyeImagePath, setEyeImagePath] = useState<string | null>(null);

	const frame = useCurrentFrame();

	useEffect(() => {
		const frameLeft = frame % (MABATAKI_INTERVAL_SECONDS * FPS);

		if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 1) {
			setEyeImagePath('04');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 2) {
			setEyeImagePath('03');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 3) {
			setEyeImagePath('02');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 4) {
			setEyeImagePath('01');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 5) {
			setEyeImagePath('00');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 6) {
			setEyeImagePath('01');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 7) {
			setEyeImagePath('02');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 8) {
			setEyeImagePath('03');
		} else if (frameLeft === MABATAKI_ANIMATION_INTERVAL_FRAME * 9) {
			setEyeImagePath('04');
		} else if (
			eyeImagePath !== null &&
			frameLeft > MABATAKI_ANIMATION_INTERVAL_FRAME * 9
		) {
			setEyeImagePath(null);
		}
	}, [frame, eyeImagePath]);

	return (
		<div
			style={{
				...containerStyle,
				animationDelay: `${isReimu ? 0 : fuyofuyoAnimationDurationSec / 2}s`,
			}}
		>
			<Img
				style={{width: `${faceSizePx}px`}}
				src={staticFile(`${imageDirectory}/body/00.png`)}
			/>
			<Img
				style={{
					...faceStyle,
					width: `${faceSizePx}px`,
				}}
				src={staticFile(
					`${imageDirectory}/eye/${
						eyeImagePath || eyeImage[face || 'default']
					}.png`
				)}
			/>
			<Img
				style={{
					...faceStyle,
					width: `${faceSizePx}px`,
				}}
				src={staticFile(
					`${imageDirectory}/mouth/${
						mouth || defaultMouth[face || 'default'] || '05'
					}.png`
				)}
			/>
		</div>
	);
};

const containerStyle: React.CSSProperties = {
	position: 'relative',
	zIndex: 10,
	...fuyofuyoAnimationCss,
};

const faceStyle: React.CSSProperties = {
	position: 'absolute',
	left: '0',
};
