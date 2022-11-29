import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/NotoSansJP';

const {fontFamily} = loadFont();

const subtitle: React.CSSProperties = {
	fontFamily,
	fontSize: 54,
};

type Props = {
	children: React.ReactNode;
};

export const Subtitle: React.FC<Props> = ({children}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return <p style={{...subtitle, opacity}}>{children}</p>;
};
