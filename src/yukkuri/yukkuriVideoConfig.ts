import React from 'react';
import {CustomObjectKeys} from '../../transcripts/CustomObjects';
import {FACE_TYPE} from './Face/ImagePaths/faceImagePaths';
import {MouthType} from './Face/ImagePaths/mouthImagePaths';

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

type Audio = {
	src: string;
	from?: number;
	volume?: number;
};

type BackgroundVideo = {
	src: string;
	from?: number;
	backgroundColor?: string;
	// 動画を複数の Talk にまたがって表示させたい時に使う
	extendTalksCount?: number;
};

export type VoiceConfig = {
	id?: string;
	// 霊夢と魔理沙がどっちも喋る時用
	ids?: string[];
	text: string;
	textForDisplay?: string;
	speaker: SPEAKER_TYPE;
	delayFrames?: number;
	audioDurationFrames: number;
	face?: string;
	mouth?: MouthType;
	image?: Image;
	backgroundVideo?: BackgroundVideo;
	audio?: Audio;
	customObjectKey?: CustomObjectKeys;
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
		bgmVolume?: number;
		backgroundVideo?: string;
		showBgVideoOverlay?: boolean;
		beforeMovie?: string;
		beforeMovieFrames?: number;
		afterMovie?: string;
		afterMovieFrames?: number;
		afterMovieVolume?: number;
		// Frame を floor している関係上どうしてもズレが起きるので微調整する苦肉の策
		afteMovieDelay?: number;
		kuchipakuMap: kuchipakuMap;
		reimuKuchipakuMap: kuchipakuMap;
		marisaKuchipakuMap: kuchipakuMap;
		initialDelayFrames?: number; // Default: 60s
	}[];
};
