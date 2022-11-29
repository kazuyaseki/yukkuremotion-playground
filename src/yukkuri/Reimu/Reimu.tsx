import {Img, staticFile} from 'remotion';
import {
	fuyofuyoAnimationCss,
	FuyoFuyoAnimationStyle,
} from '../fuyofuyoAnimation';
import {eyeImagePaths} from './ReimuImagePaths/eyeImagePaths';
import {faceImagePaths, FACE_TYPE} from './ReimuImagePaths/faceImagePaths';

type Props = {
	face?: FACE_TYPE;
	eyeOpen: boolean;
	sizePx?: number;
};

const DEFAULT_REIMU_SIZE_PX = 320;

export const Reimu: React.FC<Props> = ({face, eyeOpen, sizePx}) => {
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

				{eyeOpen ? (
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
