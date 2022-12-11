import {useEffect, useMemo, useRef, useState} from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';
import {FPS} from '../../constants';
import {
	fuyofuyoAnimationCss,
	FuyoFuyoAnimationStyle,
} from '../fuyofuyoAnimation';
import {eyeImagePaths} from './ImagePaths/eyeImagePaths';
import {faceImagePaths, FACE_TYPE} from './ImagePaths/faceImagePaths';

export type ReimuProps = {
	face?: FACE_TYPE;
	isEyeOpen?: boolean;
	isMouthOpen?: boolean;
	sizePx?: number;
	isKuchipaku?: boolean;
	isReimu?: boolean;
	isTalking: boolean;
};

const DEFAULT_REIMU_SIZE_PX = 320;

const KUCHIPAKU_INTERVAL_MSEC = 150;

const MATABATAKI_INTERVAL_FRAMES = FPS * 5;

export const YukkuriFace: React.FC<ReimuProps> = ({
	face,
	sizePx,
	isReimu,
	isTalking,
}) => {
	const [isMouthOpen, setIsMouthOpen] = useState(false);
	const [isMabataking, setIsMabataking] = useState(false);
	const kuchipakuFunc = useRef<NodeJS.Timer | null>(null);

	const frame = useCurrentFrame();

	useEffect(() => {
		if (frame % MATABATAKI_INTERVAL_FRAMES === 0) {
			setIsMabataking(true);
		}
	}, [isMabataking, frame]);

	useEffect(() => {
		if (isTalking) {
			kuchipakuFunc.current = setInterval(() => {
				setIsMouthOpen((current) => !current);
			}, KUCHIPAKU_INTERVAL_MSEC);
		} else if (kuchipakuFunc.current) {
			clearInterval(kuchipakuFunc.current);
			kuchipakuFunc.current = null;
		}
	}, [isTalking]);

	const imageDirectory = useMemo(
		() => (isReimu ? 'reimu' : 'marisa'),
		[isReimu]
	);

	return (
		<>
			<FuyoFuyoAnimationStyle />
			<Face face={face} sizePx={sizePx} imageDirectory={imageDirectory} />

			<Img
				style={{
					...faceStyle,
					width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
				}}
				src={staticFile(
					`${imageDirectory}/mouth/${isMouthOpen ? '00' : '05'}.png`
				)}
			/>
		</>
	);
};

export const Face = (props: {
	face?: FACE_TYPE;
	sizePx?: number;
	imageDirectory: string;
}) => {
	const {face, sizePx, imageDirectory} = props;

	if (!face || face === 'default') {
		return (
			<div style={containerStyle}>
				<Img
					style={{width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`}}
					src={staticFile(`${imageDirectory}/body/00.png`)}
				/>
				<Img
					style={{
						...faceStyle,
						width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
					}}
					src={staticFile(`${imageDirectory}${eyeImagePaths.open}`)}
				/>
				<Img
					style={{
						...faceStyle,
						width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
					}}
					src={staticFile(`${imageDirectory}/mouth/00.png`)}
				/>
			</div>
		);
	}

	if (face === 'nikkori') {
		return (
			<div style={containerStyle}>
				<Img
					style={{width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`}}
					src={staticFile(`${imageDirectory}/body/00.png`)}
				/>
				<Img
					style={{
						...faceStyle,
						width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
					}}
					src={staticFile(`${imageDirectory}/eye/06.png`)}
				/>
				<Img
					style={{
						...faceStyle,
						width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
					}}
					src={staticFile(`${imageDirectory}/mouth/00.png`)}
				/>
			</div>
		);
	}

	return (
		<Img
			style={{
				...faceStyle,
				width: `${props.sizePx ? props.sizePx : DEFAULT_REIMU_SIZE_PX}px`,
			}}
			src={staticFile(`${props.imageDirectory}${faceImagePaths[face]}`)}
		/>
	);
};

const containerStyle: React.CSSProperties = {
	position: 'relative',
	...fuyofuyoAnimationCss,
};

const faceStyle: React.CSSProperties = {
	position: 'absolute',
	left: '0',
};
