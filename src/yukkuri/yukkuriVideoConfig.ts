import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';

export const SPEAKER = {
	reimu: 'reimu',
	marisa: 'marisa',
	reimuAndMarisa: 'reimuAndMarisa',
} as const;

export type SPEAKER_TYPE = keyof typeof SPEAKER;

export type VoiceConfig = {
	id?: string;
	text: string;
	textForDisplay?: string;
	speaker: SPEAKER_TYPE;
	face?: FACE_TYPE;
};

export type VideoConfig = {
	sections: {
		title: string;
		fromFramesMap: {[key in number]: number};
		totalFrames: number;
		talks: VoiceConfig[];
	}[];
};
