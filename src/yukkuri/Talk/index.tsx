import {useAudioData} from '@remotion/media-utils';
import {Audio, Sequence, staticFile} from 'remotion';
import {FPS} from '../../constants';
import {SubtitleWithBackground} from '../../Subtitle/SubtitleBackground';

export type TalkProps = {
	subtitle: React.ReactNode;
	audioFilePath: string;
	from?: number;
};

export const Talk: React.FC<TalkProps> = ({subtitle, audioFilePath, from}) => {
	const music = staticFile(audioFilePath);
	const audioData = useAudioData(music);

	const frames = Math.floor((audioData?.durationInSeconds || 1) * FPS);

	return (
		<Sequence durationInFrames={frames} from={from}>
			<SubtitleWithBackground subtitle={subtitle} />
			<Audio src={music} />
		</Sequence>
	);
};
