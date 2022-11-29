import {Subtitle} from './Subtitle';

export const SubtitleBackground = (props: {subtitle: string}) => (
	<div style={jimakuBackground}>
		<Subtitle>{props.subtitle}</Subtitle>
	</div>
);

const jimakuBackground: React.CSSProperties = {
	position: 'absolute',
	width: '100%',
	height: '240px',
	bottom: 0,
	backgroundColor: '#999',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};
