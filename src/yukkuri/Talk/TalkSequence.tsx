import {Talk} from '.';
import {VoiceConfig} from '../yukkuriVideoConfig';

export type Props = {
	totalFrames: number;
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
	afterMovieFrames?: number;
};

export const TalkSequence: React.FC<Props> = ({talks, fromFramesMap}) => {
	return (
		<>
			{talks.map((talk, index) => {
				return (
					<Talk
						key={talk.ids && talks.includes.length > 0 ? talk.ids[0] : talk.id}
						voiceConfig={talk}
						from={fromFramesMap[index]}
						meta={{talks, index}}
					/>
				);
			})}
		</>
	);
};
