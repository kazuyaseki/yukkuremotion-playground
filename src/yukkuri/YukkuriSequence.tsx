import {useState} from 'react';
import {Sequence, Series} from 'remotion';
import {VoiceConfig} from '../../yukkuriVoices';
import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';
import {YukkuriFace} from './Face/YukkuriFace';

export type Props = {
	talks: VoiceConfig[];
	fromFramesMap: {[key in number]: number};
};

export const YukkuriSequence: React.FC<Props> = ({talks, fromFramesMap}) => {
	// Const [reimuFace, setReimuFace] = useState<FACE_TYPE>('atyaa');

	return (
		<Series>
			{talks.map((talk, index) => {
				// FIXME: 最後の値とる
				const durationInFrames =
					index === talks.length - 1
						? 2000
						: fromFramesMap[index + 1] - fromFramesMap[index];

				return (
					<Series.Sequence durationInFrames={durationInFrames}>
						<YukkuriFace isReimu face="angry" />
						<YukkuriFace isReimu={false} face="angry" />
					</Series.Sequence>
				);
			})}
		</Series>
	);
};
