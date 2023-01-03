import {useEffect, useMemo, useRef, useState} from 'react';
import {Sequence, useCurrentFrame} from 'remotion';
import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';
import {YukkuriFace} from './Face/YukkuriFace';
import {kuchipakuMap, SPEAKER, VoiceConfig} from './yukkuriVideoConfig';

export type Props = {
	reimuKuchipakuMap: kuchipakuMap;
	marisaKuchipakuMap: kuchipakuMap;
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
};

export const YukkuriSequence: React.FC<Props> = ({
	reimuKuchipakuMap,
	marisaKuchipakuMap,
}) => {
	return (
		<Sequence>
			<div style={reimuStyle}>
				<YukkuriFace isReimu kuchipakuMap={reimuKuchipakuMap} />
			</div>
			<div style={marisaStyle}>
				<YukkuriFace isReimu={false} kuchipakuMap={marisaKuchipakuMap} />
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
