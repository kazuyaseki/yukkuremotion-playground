import {useEffect, useState} from 'react';
import {Img, staticFile} from 'remotion';
import {
	fuyofuyoAnimationCss,
	FuyoFuyoAnimationStyle,
} from '../fuyofuyoAnimation';
import {eyeImagePaths} from './ReimuImagePaths/eyeImagePaths';
import {faceImagePaths, FACE_TYPE} from './ReimuImagePaths/faceImagePaths';

export type ReimuProps = {
	face?: FACE_TYPE;
	isEyeOpen?: boolean;
	isMouthOpen?: boolean;
	sizePx?: number;
	isKuchipaku?: boolean;
};

const DEFAULT_REIMU_SIZE_PX = 320;

const KUCHIPAKU_INTERVAL_MSEC = 150;

export const Reimu: React.FC<ReimuProps> = ({
	face,
	isEyeOpen: eyeOpen,
	isMouthOpen: mouthOpen,
	isKuchipaku,
	sizePx,
}) => {
	const [isMouthOpen, setIsMouthOpen] = useState(false);

	useEffect(() => {
		// If (isKuchipaku) {
		// 	SetInterval(() => {
		// 		setIsMouthOpen((current) => !current);
		// 	}, KUCHIPAKU_INTERVAL_MSEC);
		// }
	}, [isKuchipaku]);

	return (
		<>
			<FuyoFuyoAnimationStyle />
			<div style={containerStyle}>
				<Img
					style={{width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`}}
					src={staticFile('reimu/body/00.png')}
				/>
				{eyeOpen ? (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(eyeImagePaths.open)}
					/>
				) : (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(eyeImagePaths.close)}
					/>
				)}

				{isMouthOpen ? (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile('reimu/mouth/00.png')}
					/>
				) : (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile('reimu/mouth/05.png')}
					/>
				)}

				{face && (
					<Img
						style={{
							...faceStyle,
							width: `${sizePx ? sizePx : DEFAULT_REIMU_SIZE_PX}px`,
						}}
						src={staticFile(faceImagePaths[face])}
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
