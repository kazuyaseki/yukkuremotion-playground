import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';

export const SPEAKER = {
	reimu: 'reimu',
	marisa: 'marisa',
	reimuAndMarisa: 'reimuAndMarisa',
} as const;

export type SPEAKER_TYPE = keyof typeof SPEAKER;

type Image = {
	src: string;
	from?: number;
	backgroundColor?: string;
};

type BackgroundVideo = {
	src: string;
	from?: number;
	backgroundColor?: string;
};

export type VoiceConfig = {
	id?: string;
	text: string;
	textForDisplay?: string;
	speaker: SPEAKER_TYPE;
	face?: FACE_TYPE;
	image?: Image;
	backgroundVideo?: BackgroundVideo;
	customDuration?: number;
};

export type VideoConfig = {
	sections: {
		title: string;
		fromFramesMap: {[key in number]: number};
		totalFrames: number;
		talks: VoiceConfig[];
		bgmSrc?: string;
		backgroundVideo?: string;
	}[];
};
