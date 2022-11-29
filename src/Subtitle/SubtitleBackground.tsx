import React from 'react';
import {Subtitle} from './Subtitle';

export const SubtitleBackground = (props: {subtitle: React.ReactNode}) => (
	<div style={jimakuBackground}>
		<Subtitle>{props.subtitle}</Subtitle>
	</div>
);

const jimakuBackground: React.CSSProperties = {
	position: 'absolute',
	width: '100%',
	height: '240px',
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.6)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};
