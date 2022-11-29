const REIMU_EYE_PATH = 'reimu/eye/';

export const eyeImagePaths = {
	close: `${REIMU_EYE_PATH}00.png`,
	nibu: `${REIMU_EYE_PATH}01.png`,
	sanbu: `${REIMU_EYE_PATH}02.png`,
	hanbiraki: `${REIMU_EYE_PATH}03.png`,
	rokuwari: `${REIMU_EYE_PATH}04.png`,
	open: `${REIMU_EYE_PATH}05.png`,
	nikkori: `${REIMU_EYE_PATH}06.png`,
	7: `${REIMU_EYE_PATH}07.png`,
	8: `${REIMU_EYE_PATH}08.png`,
	9: `${REIMU_EYE_PATH}09.png`,
	kyomu: `${REIMU_EYE_PATH}10.png`,
	shonbori: `${REIMU_EYE_PATH}11.png`,
	gakkari: `${REIMU_EYE_PATH}12.png`,
	kirari: `${REIMU_EYE_PATH}13.png`,
	angry: `${REIMU_EYE_PATH}14.png`,
	kuyasi: `${REIMU_EYE_PATH}15.png`,
	mumu: `${REIMU_EYE_PATH}16.png`,
	futt: `${REIMU_EYE_PATH}17.png`,
	atyaa: `${REIMU_EYE_PATH}18.png`,
	tehepero: `${REIMU_EYE_PATH}19.png`,
	a: `${REIMU_EYE_PATH}20.png`,
	egao: `${REIMU_EYE_PATH}21.png`,
	sorena: `${REIMU_EYE_PATH}22.png`,
	human: `${REIMU_EYE_PATH}23.png`,
	tsundere: `${REIMU_EYE_PATH}24.png`,
	nanndato: `${REIMU_EYE_PATH}25.png`,
	yodare: `${REIMU_EYE_PATH}26.png`,
	buu: `${REIMU_EYE_PATH}27.png`,
	gookyuu: `${REIMU_EYE_PATH}28.png`,
	ehhen: `${REIMU_EYE_PATH}29.png`,
	ee: `${REIMU_EYE_PATH}30.png`,
} as const;

export type EYE_TYPE = keyof typeof eyeImagePaths;
