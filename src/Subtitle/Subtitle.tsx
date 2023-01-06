import React from 'react';

const subtitle: React.CSSProperties = {
	fontFamily: 'GenshinGothic',
	fontSize: 64,
	fontWeight: '900',
	lineHeight: 1.28,
	color: '#fff',
	WebkitTextStroke: '4px #C90003',
	textAlign: 'center',
};

type Props = {
	children: React.ReactNode;
};

export const Subtitle: React.FC<Props> = ({children}) => {
	return <p style={{...subtitle}}>{children}</p>;
};
