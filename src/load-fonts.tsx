import {continueRender, delayRender, staticFile} from 'remotion';

export function loadFont() {
	const waitForFont = delayRender();

	// Const font = new FontFace(
	// 	`GenshinGothic`,
	// 	`url(${staticFile(
	// 		'font/genshingothic/GenShinGothic-Heavy.ttf'
	// 	)}) format('opentype')`
	// );

	const font = new FontFace(
		`GenshinGothic`,
		`url(${staticFile(
			'font/LanobePOPv2/LightNovelPOPv2.otf'
		)}) format('opentype')`
	);

	font
		.load()
		.then(() => {
			document.fonts.add(font);
			continueRender(waitForFont);
		})
		.catch((err) => console.log('Error loading font', err));
}
