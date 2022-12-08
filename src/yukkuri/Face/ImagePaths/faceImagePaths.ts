const REIMU_FACE_PATH = '/face/';

export const faceImagePaths = {
	kyomu: `${REIMU_FACE_PATH}10.png`,
	shonbori: `${REIMU_FACE_PATH}11.png`,
	gakkari: `${REIMU_FACE_PATH}12.png`,
	kirari: `${REIMU_FACE_PATH}13.png`,
	angry: `${REIMU_FACE_PATH}14.png`,
	kuyasi: `${REIMU_FACE_PATH}15.png`,
	mumu: `${REIMU_FACE_PATH}16.png`,
	futt: `${REIMU_FACE_PATH}17.png`,
	atyaa: `${REIMU_FACE_PATH}18.png`,
	tehepero: `${REIMU_FACE_PATH}19.png`,
	nikkori: `${REIMU_FACE_PATH}20.png`,
	egao: `${REIMU_FACE_PATH}21.png`,
	sorena: `${REIMU_FACE_PATH}22.png`,
	human: `${REIMU_FACE_PATH}23.png`,
	tsundere: `${REIMU_FACE_PATH}24.png`,
	nanndato: `${REIMU_FACE_PATH}25.png`,
	yodare: `${REIMU_FACE_PATH}26.png`,
	buu: `${REIMU_FACE_PATH}27.png`,
	gookyuu: `${REIMU_FACE_PATH}28.png`,
	ehhen: `${REIMU_FACE_PATH}29.png`,
	ee: `${REIMU_FACE_PATH}30.png`,
	namida: `${REIMU_FACE_PATH}31.png`,
	uruuru: `${REIMU_FACE_PATH}32.png`,
	pupupu: `${REIMU_FACE_PATH}33.png`,
	buchigire: `${REIMU_FACE_PATH}34.png`,
	yattaze: `${REIMU_FACE_PATH}35.png`,
	hanya: `${REIMU_FACE_PATH}36.png`,
	homoo: `${REIMU_FACE_PATH}37.png`,
	monaa: `${REIMU_FACE_PATH}38.png`,
	odoshi: `${REIMU_FACE_PATH}39.png`,
	donbiki: `${REIMU_FACE_PATH}40.png`,
	sorehadamedaro: `${REIMU_FACE_PATH}41.png`,
	uwaa: `${REIMU_FACE_PATH}42.png`,
	hiyaase: `${REIMU_FACE_PATH}43.png`,
} as const;

export type COMPOSITE_FACE_TYPE = 'default';

export type FACE_TYPE = keyof typeof faceImagePaths | COMPOSITE_FACE_TYPE;
