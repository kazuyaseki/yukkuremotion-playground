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
				{eyeOpen ? (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(`${imageDirectory}${eyeImagePaths.open}`)}
					/>
				) : (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(`${imageDirectory}${eyeImagePaths.close}`)}
					/>
				)}

				{isMouthOpen ? (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(`${imageDirectory}/mouth/00.png`)}
					/>
				) : (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(`${imageDirectory}/mouth/05.png`)}
					/>
				)}

				{face && (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(`${imageDirectory}${faceImagePaths[face]}`)}
					/>
				)}
			</div>
		</>
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
