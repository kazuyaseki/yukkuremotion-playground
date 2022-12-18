import {Talk} from '.';
import {VoiceConfig} from '../yukkuriVideoConfig';

export type Props = {
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
};

export const TalkSequence: React.FC<Props> = ({talks, fromFramesMap}) => {
	return (
		<>
			{talks.map((talk, index) => (
				<Talk voiceConfig={talk} from={fromFramesMap[index]} />
			))}
		</>
	);
};
