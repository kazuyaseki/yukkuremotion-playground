import {useEffect, useMemo, useState} from 'react';
import {
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FPS} from '../../constants';
import {kuchipakuMap} from '../yukkuriVideoConfig';

export type MOUTH_TYPE = 'OPEN' | 'CLOSE';

export type TalkInterval = {
	start: number;
	end: number;
};

export type KuchipakuMap = {
	frames: number[];
	imageIndexes: number[];
};

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
	kuchipakuMap: kuchipakuMap;
};

const DEFAULT_REIMU_SIZE_PX = 320;

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
	kuchipakuMap,
}) => {
	const imageDirectory = useMemo(
		() => (isReimu ? 'reimu' : 'marisa'),
		[isReimu]
	);

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
				kuchipakuMap={kuchipakuMap}
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

export const Face = (props: {
	face?: string;
	mouth?: string;
	sizePx?: number;
	isReimu?: boolean;
	imageDirectory: string;
	isTalking: boolean;
	kuchipakuMap: kuchipakuMap;
}) => {
	const {
		face,
		mouth,
		sizePx,
		isReimu,
		imageDirectory,
		isTalking,
		kuchipakuMap,
	} = props;

	// Multiply by 1.2 because Marisa is bit smaller compared to Reimu
	const faceSizePx =
		(sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX) * (isReimu ? 1.0 : 1.2);

	const [eyeImagePath, setEyeImagePath] = useState<string | null>(null);

	const frame = useCurrentFrame();

	useEffect(() => {
		if (isReimu) {
			console.log(
				isTalking ? '霊夢が話してる' : '霊夢が話し終わった',
				`at frame: ${frame}`
			);
		} else {
			console.log(
				isTalking ? '魔理沙が話してる' : '魔理沙が話し終わった',
				`at frame: ${frame}`
			);
		}
	}, [isTalking]);

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

	const mouthImageNum = interpolate(
		frame,
		kuchipakuMap.frames,
		kuchipakuMap.amplitude
	);

	return (
		<div
			style={{
				...containerStyle,
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
					`${imageDirectory}/mouth/${Math.abs(Math.floor(mouthImageNum))
						.toString()
						.padStart(2, '0')}.png`
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
