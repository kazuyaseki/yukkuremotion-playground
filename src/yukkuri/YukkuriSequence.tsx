import {useEffect, useMemo, useRef, useState} from 'react';
import {Sequence, useCurrentFrame} from 'remotion';
import {YukkuriFace} from './Face/YukkuriFace';
import {VoiceConfig} from './yukkuriVideoConfig';

export type Props = {
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
};

export const YukkuriSequence: React.FC<Props> = ({}) => {
	return (
		<Sequence>
			<div style={reimuStyle}>
				<YukkuriFace isReimu />
			</div>
			<div style={marisaStyle}>
				<YukkuriFace isReimu={false} />
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
