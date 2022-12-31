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
	const hasAudio = !!voiceConfig.id || !!voiceConfig.ids;

	const CustomObject = voiceConfig.customObjectKey
		? CustomObjects[voiceConfig.customObjectKey]
		: null;

	const durationInFrames =
		voiceConfig.customDuration ||
		voiceConfig.audioDurationFrames + TALK_GAP_FRAMES;

	return (
		<>
			<Sequence durationInFrames={durationInFrames} from={from}>
				<SubtitleWithBackground
					subtitle={voiceConfig.textForDisplay || voiceConfig.text}
				/>
				{hasAudio &&
					(voiceConfig.ids && voiceConfig.ids.length > 0 ? (
						voiceConfig.ids.map((id) => {
							return <Audio src={staticFile(`audio/yukkuri/${id}.wav`)} />;
						})
					) : (
						<Audio src={staticFile(`audio/yukkuri/${voiceConfig.id}.wav`)} />
					))}
			</Sequence>

			{voiceConfig.image && (
				<Sequence
					durationInFrames={durationInFrames}
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
					durationInFrames={durationInFrames}
					from={(from || 0) + (voiceConfig.audio.from || 0)}
				>
					<Audio src={staticFile(voiceConfig.audio.src)} />
				</Sequence>
			)}

			{CustomObject && (
				<Sequence durationInFrames={durationInFrames} from={from || 0}>
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
