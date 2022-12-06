import {getAudioData} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import {staticFile} from 'remotion';
import {Talk} from '.';
import {VoiceConfig} from '../../../yukkuriVoices';
import {FPS} from '../../constants';

export type Props = {
	talks: VoiceConfig[];
};

const TALK_GAP_FRAMES = 10;

export const TalkSequence: React.FC<Props> = ({talks}) => {
	const [fromFrameMap, setfromFrameMap] = useState<{[key in number]: number}>(
		{}
	);

	useEffect(() => {
		for (let i = 0; i < talks.length; i++) {
			getAudioData(staticFile(`audio/yukkuri/${talks[i].id}.wav`)).then(
				(audioData) => {
					const frames = Math.floor((audioData?.durationInSeconds || 1) * FPS);
					setfromFrameMap((current) => ({...current, [i]: frames}));
				}
			);
		}
	}, [talks]);

	const calculateFromFrames = (index: number) => {
		let frames = 0;
		for (let i = 0; i < index; i++) {
			if (fromFrameMap[i]) {
				frames += fromFrameMap[i] + TALK_GAP_FRAMES;
			}
		}
		return frames;
	};

	return (
		<>
			{talks.map((talk, index) => (
				<Talk voiceConfig={talk} from={calculateFromFrames(index)} />
			))}
		</>
	);
};
