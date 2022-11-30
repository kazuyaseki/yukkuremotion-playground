import {getAudioData, useAudioData} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import {Audio, Sequence, staticFile} from 'remotion';
import {Talk, TalkProps} from '.';
import {FPS} from '../../constants';
import {SubtitleWithBackground} from '../../Subtitle/SubtitleBackground';

export type Props = {
	talks: TalkProps[];
};

export const TalkSequence: React.FC<Props> = ({talks}) => {
	const [fromFrameMap, setfromFrameMap] = useState<{[key in number]: number}>(
		{}
	);

	useEffect(() => {
		for (let i = 0; i < talks.length; i++) {
			getAudioData(staticFile(talks[i].audioFilePath)).then((audioData) => {
				const frames = Math.floor((audioData?.durationInSeconds || 1) * FPS);
				setfromFrameMap((current) => ({...current, [i]: frames}));
			});
		}
	}, [talks]);

	const calculateFromFrames = (index: number) => {
		let frames = 0;
		for (let i = 0; i < index; i++) {
			if (fromFrameMap[i]) {
				frames += fromFrameMap[i];
			}
		}
		return frames;
	};

	return (
		<>
			{talks.map((talk, index) => (
				<Talk {...talk} from={calculateFromFrames(index)} />
			))}
		</>
	);
};
