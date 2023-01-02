import {useEffect, useMemo, useRef, useState} from 'react';
import {
	Easing,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
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

const FuyoFuyoInterval = 40;
const FuyoFuyoRange = 2;

function addFuyoFuyoRange(intervals: number[]) {
	if (intervals.length === 0) {
		intervals.push(FuyoFuyoRange);
		return;
	}

	if (intervals[intervals.length - 1] === FuyoFuyoRange) {
		intervals.push(-FuyoFuyoRange);
	} else {
		intervals.push(FuyoFuyoRange);
	}
}

function getFuyoFuyoFrames(videoFrames: number, isReimu?: boolean) {
	const frames: number[] = [isReimu ? 0 : FuyoFuyoInterval / 2];
	const intervals: number[] = [FuyoFuyoRange];

	let left = videoFrames;
	while (left > FuyoFuyoInterval) {
		frames.push(frames[frames.length - 1] + FuyoFuyoInterval);
		left -= FuyoFuyoInterval;

		addFuyoFuyoRange(intervals);
	}

	if (left > 0) {
		frames.push(frames[frames.length - 1] + left);
		addFuyoFuyoRange(intervals);
	}

	return [frames, intervals];
}

export const YukkuriFace: React.FC<ReimuProps> = ({
	face,
	sizePx,
	isReimu,
	isTalking,
	mouth,
}) => {
	const imageDirectory = useMemo(
		() => (isReimu ? 'reimu' : 'marisa'),
		[isReimu]
	);

	useEffect(() => {
		if (isReimu) {
			console.log('霊夢が話してる', isTalking);
		} else {
			console.log('魔理沙が話してる', isTalking);
		}
	}, [isTalking]);

	const frame = useCurrentFrame();
	const video = useVideoConfig();

	const [frames, intervals] = useMemo(
		() => getFuyoFuyoFrames(video.durationInFrames, isReimu),
		[video]
	);

	const translateY = interpolate(frame, frames, intervals, {
		easing: Easing.bezier(0.51, 0, 0.49, 1),
	});

	return (
		<div style={{transform: `translateY(${translateY}%)`}}>
			<Face
				face={face}
				sizePx={sizePx}
				imageDirectory={imageDirectory}
				isReimu={isReimu}
				isTalking={isTalking}
				mouth={mouth}
			/>
		</div>
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

const KUCHIPAKU_ANIMATION_INTERVAL_FRAME = 1;

function getCurrentMouth(frame: number, isTalking: boolean) {
	// if (!isTalking) {
	// 	return '05';
	// } else {
	const frameLeft = frame % (5 * KUCHIPAKU_ANIMATION_INTERVAL_FRAME);

	// if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 0) {
	// 	return '06';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 1) {
	// 	return '05';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 2) {
	// 	return '04';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 3) {
	// 	return '03';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 4) {
	// 	return '02';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 5) {
	// 	return '01';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 6) {
	// 	return '00';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 7) {
	// 	return '01';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 8) {
	// 	return '02';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 9) {
	// 	return '03';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 10) {
	// 	return '04';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 11) {
	// 	return '05';
	// } else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 12) {
	// 	return '06';
	// }

	if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 0) {
		return '06';
	} else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 1) {
		return '04';
	} else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 2) {
		return '02';
	} else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 3) {
		return '00';
	} else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 4) {
		return '02';
	} else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 5) {
		return '04';
	} else if (frameLeft === KUCHIPAKU_ANIMATION_INTERVAL_FRAME * 6) {
		return '06';
	}

	// }
}

export const Face = (props: {
	face?: string;
	mouth?: string;
	sizePx?: number;
	isReimu?: boolean;
	imageDirectory: string;
	isTalking: boolean;
}) => {
	const {face, mouth, sizePx, isReimu, imageDirectory, isTalking} = props;

	// Multiply by 1.2 because Marisa is bit smaller compared to Reimu
	const faceSizePx =
		(sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX) * (isReimu ? 1.0 : 1.2);

	const [eyeImagePath, setEyeImagePath] = useState<string | null>(null);
	const [mouthImagePath, setMouthImagePath] = useState<string | null>(null);

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

	useEffect(() => {
		console.log(frame, mouthImagePath);
	}, [mouthImagePath]);

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
					`${imageDirectory}/mouth/${getCurrentMouth(frame, isTalking)}.png`
				)}
			/>
		</div>
	);
};

const containerStyle: React.CSSProperties = {
	position: 'relative',
	zIndex: 10,
};

const faceStyle: React.CSSProperties = {
	position: 'absolute',
	left: '0',
	zIndex: 10,
};
