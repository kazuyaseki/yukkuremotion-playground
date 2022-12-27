import {useAudioData} from '@remotion/media-utils';
import {Audio, Img, Sequence, staticFile} from 'remotion';
import {CustomObjects} from '../../../transcripts/CustomObjects';
import {FPS, SUBTITLE_HEIGHT_PX, TALK_GAP_FRAMES} from '../../constants';
import {SubtitleWithBackground} from '../../Subtitle/SubtitleBackground';
import {VoiceConfig} from '../yukkuriVideoConfig';

export type TalkProps = {
	voiceConfig: VoiceConfig;
	from?: number;
};

export const Talk: React.FC<TalkProps> = ({voiceConfig, from}) => {
	const hasAudio = !!voiceConfig.id;
	const music = voiceConfig.id
		? staticFile(`audio/yukkuri/${voiceConfig.id}.wav`)
		: staticFile(`audio/saisho.mp3`);
	const audioData = useAudioData(music);

	const frames =
		voiceConfig.customDuration ||
		Math.floor((audioData?.durationInSeconds || 1) * FPS) + TALK_GAP_FRAMES;

	const CustomObject = voiceConfig.customObjectKey
		? CustomObjects[voiceConfig.customObjectKey]
		: null;

	return (
		<>
			<Sequence durationInFrames={frames} from={from}>
				<SubtitleWithBackground
					subtitle={voiceConfig.textForDisplay || voiceConfig.text}
				/>
				{hasAudio && <Audio src={music} />}
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
						<Img src={staticFile(voiceConfig.image.src)} style={imageStyle} />
					</div>
				</Sequence>
			)}

			{voiceConfig.audio && (
				<Sequence
					durationInFrames={frames}
					from={(from || 0) + (voiceConfig.audio.from || 0)}
				>
					<Audio src={staticFile(voiceConfig.audio.src)} />
				</Sequence>
			)}

			{CustomObject && (
				<Sequence durationInFrames={frames} from={from || 0}>
					<CustomObject />
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
