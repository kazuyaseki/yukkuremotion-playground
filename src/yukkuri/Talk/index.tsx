import {useAudioData} from '@remotion/media-utils';
import {Audio, Img, Sequence, staticFile} from 'remotion';
import {FPS, SUBTITLE_HEIGHT_PX, TALK_GAP_FRAMES} from '../../constants';
import {SubtitleWithBackground} from '../../Subtitle/SubtitleBackground';
import {VoiceConfig} from '../yukkuriVideoConfig';

export type TalkProps = {
	voiceConfig: VoiceConfig;
	from?: number;
};

export const Talk: React.FC<TalkProps> = ({voiceConfig, from}) => {
	const music = staticFile(`audio/yukkuri/${voiceConfig.id}.wav`);
	const audioData = useAudioData(music);

	const frames =
		Math.floor((audioData?.durationInSeconds || 1) * FPS) + TALK_GAP_FRAMES;

	return (
		<>
			<Sequence durationInFrames={frames} from={from}>
				<SubtitleWithBackground
					subtitle={voiceConfig.textForDisplay || voiceConfig.text}
				/>
				<Audio src={music} />
			</Sequence>

			{voiceConfig.image && (
				<Sequence
					durationInFrames={frames}
					from={(from || 0) + (voiceConfig.image.from || 0)}
				>
					<div
						style={{
							...imagePosition,
							backgroundColor: voiceConfig.image.backgroundColor,
						}}
					>
						<Img src={voiceConfig.image.src} style={imageStyle} />
					</div>
				</Sequence>
			)}
		</>
	);
};

const VERTICAL_PADDING_PX = 60;
const HORIZONTAL_PADDING_PX = 400;

const imagePosition: React.CSSProperties = {
	position: 'absolute',
	height: `calc(100% - ${SUBTITLE_HEIGHT_PX}px - ${VERTICAL_PADDING_PX * 2}px)`,
	top: VERTICAL_PADDING_PX,
	left: HORIZONTAL_PADDING_PX,
	width: `calc(100% - ${HORIZONTAL_PADDING_PX * 2}px)`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const imageStyle: React.CSSProperties = {
	objectFit: 'contain',
	padding: '40px',
	width: '100%',
	height: '100%',
};
