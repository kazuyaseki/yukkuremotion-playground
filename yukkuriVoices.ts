export type VoiceConfig = {
	id?: string;
	text: string;
	isReimu: boolean;
};

export const yukkuriVoice = {
	neneemarisa: {key: 'neneemarisa', text: 'ねえねえ魔理沙', isReimu: true},
	nandareimu: {key: 'nandareimu', text: 'なんだ霊夢', isReimu: false},
	dekita: {key: 'dekita', text: 'できた！', isReimu: false},
} as const;
