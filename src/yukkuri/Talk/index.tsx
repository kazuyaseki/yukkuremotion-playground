import {useAudioData} from '@remotion/media-utils';
import {Audio, Sequence, staticFile} from 'remotion';
import {VoiceConfig} from '../../../yukkuriVoices';
import {FPS} from '../../constants';
import {SubtitleWithBackground} from '../../Subtitle/SubtitleBackground';

export type TalkProps = {
	voiceConfig: VoiceConfig;
	from?: number;
};

export const Talk: React.FC<TalkProps> = ({voiceConfig, from}) => {
	const music = staticFile(`audio/${voiceConfig.key}.wav`);
	const audioData = useAudioData(music);

	const frames = Math.floor((audioData?.durationInSeconds || 1) * FPS);

	return (
		<Sequence durationInFrames={frames} from={from}>
			<SubtitleWithBackground subtitle={voiceConfig.text} />
			<Audio src={music} />
		</Sequence>
	);
};
