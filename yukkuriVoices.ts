import {FACE_TYPE} from './src/yukkuri/Face/ImagePaths/faceImagePaths';

export type VoiceConfig = {
	id?: string;
	text: string;
	textForDisplay?: string;
	isReimu: boolean;
	face?: FACE_TYPE;
};

export const yukkuriVoice = {
	neneemarisa: {key: 'neneemarisa', text: 'ねえねえ魔理沙', isReimu: true},
	nandareimu: {key: 'nandareimu', text: 'なんだ霊夢', isReimu: false},
	dekita: {key: 'dekita', text: 'できた！', isReimu: false},
} as const;
