import {useAudioData} from '@remotion/media-utils';
import {Audio, Sequence, staticFile} from 'remotion';
import {VoiceConfig} from '../../../yukkuriVoices';
import {FPS, TALK_GAP_FRAMES} from '../../constants';
import {SubtitleWithBackground} from '../../Subtitle/SubtitleBackground';

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
		<Sequence durationInFrames={frames} from={from}>
			<SubtitleWithBackground
				subtitle={voiceConfig.textForDisplay || voiceConfig.text}
			/>
			<Audio src={music} />
		</Sequence>
	);
};
