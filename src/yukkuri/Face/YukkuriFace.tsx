import {useEffect, useMemo, useState} from 'react';
import {Img, staticFile} from 'remotion';
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
};

const DEFAULT_REIMU_SIZE_PX = 320;

const KUCHIPAKU_INTERVAL_MSEC = 150;

export const YukkuriFace: React.FC<ReimuProps> = ({
	face,
	isEyeOpen: eyeOpen,
	isMouthOpen: mouthOpen,
	isKuchipaku,
	sizePx,
	isReimu,
}) => {
	const [isMouthOpen, setIsMouthOpen] = useState(false);

	useEffect(() => {
		// If (isKuchipaku) {
		// 	SetInterval(() => {
		// 		setIsMouthOpen((current) => !current);
		// 	}, KUCHIPAKU_INTERVAL_MSEC);
		// }
	}, [isKuchipaku]);

	const imageDirectory = useMemo(
		() => (isReimu ? 'reimu' : 'marisa'),
		[isReimu]
	);

	return (
		<>
			<FuyoFuyoAnimationStyle />
			<div style={containerStyle}>
				<Img
					style={{width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`}}
					src={staticFile(`${imageDirectory}/body/00.png`)}
				/>

				<Face face={face} sizePx={sizePx} imageDirectory={imageDirectory} />

				{/* <Img
					style={{
						...faceStyle,
						width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
					}}
					src={staticFile(
						`${imageDirectory}${
							eyeOpen ? eyeImagePaths.open : eyeImagePaths.close
						}`
					)}
				/>

				<Img
					style={{
						...faceStyle,
						width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
					}}
					src={staticFile(
						`${imageDirectory}/mouth/${isMouthOpen ? '00' : '05'}.png`
					)}
				/> */}
			</div>
		</>
	);
};

const Face = (props: {
	face?: FACE_TYPE;
	sizePx?: number;
	imageDirectory: string;
}) => {
	const {face, sizePx, imageDirectory} = props;

	if (!face || face === 'default') {
		return (
			<>
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
			</>
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
