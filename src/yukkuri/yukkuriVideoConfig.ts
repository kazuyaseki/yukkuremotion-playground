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
	// 音声の長さより長くしたい、短くしたい場合にここに直接入力する
	customDuration?: number;
	// 特に動画自体には影響のない、動画制作者のためのメモ
	memoForEditor?: string;
};

export type kuchipakuMap = {frames: number[]; amplitude: number[]};

export type VideoConfig = {
	sections: {
		title: string;
		fromFramesMap: {[key in number]: number};
		totalFrames: number;
		talks: VoiceConfig[];
		bgmSrc?: string;
		backgroundVideo?: string;
		kuchipakuMap: kuchipakuMap;
	}[];
};
