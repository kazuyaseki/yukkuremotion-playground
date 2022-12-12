import React from 'react';
import {Subtitle} from './Subtitle';

export const SubtitleWithBackground = (props: {subtitle: string}) => (
	<div style={jimakuBackground}>
		<Subtitle>{props.subtitle}</Subtitle>
	</div>
);

const jimakuBackground: React.CSSProperties = {
	position: 'absolute',
	width: '100%',
	height: '240px',
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	whiteSpace: 'pre-wrap',
	zIndex: 10,
};
