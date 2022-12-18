import {staticFile} from 'remotion';
import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = {
	sections: [
		{
			title: 'イントロダクション',
			bgmSrc: staticFile(`audio/bgm/honobono-wartz.wav`),
			backgroundVideo: staticFile(`video/codebg.mp4`),
			fromFramesMap: {
				'0': 0,
				'1': 59,
				'2': 108,
				'3': 203,
				'4': 283,
				'5': 412,
				'6': 502,
				'7': 693,
				'8': 824,
				'9': 914,
				'10': 1002,
				'11': 1077,
				'12': 1243,
				'13': 1273,
				'14': 1445,
			},
			talks: [
				{
					text: 'ねえねえ魔理沙',
					speaker: 'reimu',
					id: '221f35ab25b34e178a21af8bfd8751c8',
				},
				{
					text: 'なんだ霊夢',
					speaker: 'marisa',
					id: 'a94a221f0d9645449c9c25b993a4e048',
				},
				{
					text: '私たちってめんどくさくない？',
					speaker: 'reimu',
					id: '2cbc9b4ea7604fcfa238d782a8348038',
				},
				{
					text: 'なんだ急にメンヘラみたいに',
					speaker: 'marisa',
					id: '76d9bfbb63c442f5932d9d86af3f916a',
				},
				{
					text: 'いや私たちってこうやって表情変えたり',
					speaker: 'reimu',
					id: '09b1ee6e83f6432b84bca1d01b175177',
					face: 'angry',
				},
				{
					text: '口パクや瞬きさせたり',
					speaker: 'reimu',
					id: 'c8ff989ffed34721bb092e9c1d229021',
				},
				{
					text: '音声も一文一文音声ファイルを、作ったりしているわけじゃない',
					textForDisplay:
						'音声も一文一文音声ファイルを\n作ったりしているわけじゃない',
					speaker: 'reimu',
					id: '8a7cc2761a584100a655acc5488ad57a',
					face: 'donbiki',
				},
				{
					text: '作っている人もよくやるなと感心するわ',
					speaker: 'reimu',
					id: 'f07cda8231de4fcfa72baf98c1316c17',
				},
				{
					text: 'そういうメタ的な話だったか',
					speaker: 'marisa',
					id: 'abd26bb8e05f4d37bd1b4b11cc0e89ba',
				},
				{
					text: 'それなら簡単な方法があるぜ',
					speaker: 'marisa',
					id: '3c2feb6e983547ec88b21ec15b8e6b64',
				},
				{
					text: 'え、教えて教えて',
					speaker: 'reimu',
					id: '594964499ccd4318b8b4c497def51d28',
				},
				{
					text: '何を隠そう、今喋っている私たちもそれで作られているからな',
					textForDisplay:
						'何を隠そう、今喋っている私たちも\nそれで作られているからな',
					speaker: 'marisa',
					id: 'b54edc30f12e4605aaf48b770a28ad82',
				},
				{text: 'え', speaker: 'reimu', id: '6ebec75cd08042d08b8533e18ff563dd'},
				{
					text: 'それじゃあプログラミングでゆっくり実況を作る方法を解説していくぜ',
					textForDisplay:
						'それじゃあプログラミングで\nゆっくり実況を作る方法を解説していくぜ',
					speaker: 'marisa',
					id: 'f05ff560bc9f4ec5a180675e75eb4992',
				},
				{
					text: 'それでは、ゆっくりしていってね！',
					speaker: 'marisa',
					id: '7b1d4a1f5b0542d1aaa655b274a246cc',
				},
			],
			totalFrames: 1472,
		},
		{
			title: 'Remotion の説明',
			bgmSrc: staticFile(`audio/bgm/honobono-wartz.wav`),
			backgroundVideo: staticFile(`video/codebg.mp4`),
			fromFramesMap: {
				'0': 0,
				'1': 126,
				'2': 278,
				'3': 327,
				'4': 516,
				'5': 562,
				'6': 664,
				'7': 734,
				'8': 781,
				'9': 995,
				'10': 1240,
				'11': 1439,
				'12': 1561,
				'13': 1674,
				'14': 1845,
				'15': 1897,
				'16': 2070,
				'17': 2254,
				'18': 2420,
				'19': 2544,
				'20': 2619,
				'21': 2667,
				'22': 2802,
				'23': 3004,
				'24': 3172,
				'25': 3234,
				'26': 3304,
			},
			talks: [
				{
					text: 'プログラミングで作るってどういうことなの？',
					speaker: 'reimu',
					id: '0143e9803ce84c3e9f1ef19d1ee05822',
				},
				{
					text: '今回は Remotion っていう技術を使って作っていくぜ',
					speaker: 'marisa',
					id: '1c9e2d8c926d4f81aa1702c41dd631f1',
					image: {
						src: staticFile('image/remotion-logo.png'),
						backgroundColor: '#fff',
					},
				},
				{
					text: 'Remotion?',
					speaker: 'reimu',
					id: '7705a41fb00a426b835e82efa6be053b',
					image: {
						src: staticFile('image/remotion-logo.png'),
						backgroundColor: '#fff',
					},
				},
				{
					text: 'Remotion は React っていう技術を使って動画を作れるツールなんだ',
					textForDisplay:
						'Remotion は React っていう技術を\n使って動画を作れるツールなんだ',
					speaker: 'marisa',
					id: 'a8ad74a0d90940ab986ba69c334e2c79',
					image: {
						src: staticFile('image/remotion-logo.png'),
						backgroundColor: '#fff',
					},
				},
				{
					text: 'React?',
					speaker: 'reimu',
					id: 'f7617be2472e451d84aeb187af1e066a',
				},
				{
					text: 'ちょっと知らない単語がいっぱいだわ',
					speaker: 'reimu',
					id: 'e54755ad58194baf912e4882cdb268ba',
				},
				{
					text: '順に説明して',
					speaker: 'reimu',
					id: '48e3703f326d438a88b64e09ede64f99',
				},
				{
					text: 'わかったぜ',
					speaker: 'marisa',
					id: '3f5e6a4242eb472bacf9ed9ccc5071a1',
				},
				{
					text: 'React はすごいざっくりいうと Web サイトの見た目の部分を作るための技術だな',
					speaker: 'marisa',
					id: '406b217572574831b6625230f6ebd03d',
				},
				{
					text: 'Web サイトを作るためには HTML や CSS 、JavaScript という技術を使うんだが、',
					speaker: 'marisa',
					id: '6525a9510c9046ca8fdd11499889f8a0',
				},
				{
					text: 'React はリッチなサイトを作るときにそれらを便利に扱うための技術なんだ',
					speaker: 'marisa',
					id: 'cffb801c2e5448b08cde41805ada09f6',
				},
				{
					text: '具体的にはこんな感じで見た目を作れるんだ',
					speaker: 'marisa',
					id: '82ebaa4fc91c4c1dab822d0c1edfbded',
				},
				{
					text: 'へえ...それは...便利なの？',
					speaker: 'reimu',
					id: '1b5c81ff991e44f2a09a75731158f9f6',
				},
				{
					text: 'まあとりあえず Web サイトの見た目を作れるものと覚えていてくれ',
					speaker: 'marisa',
					id: '0fa2f1d717e245da9e75f6889946278f',
				},
				{
					text: 'わかったわ',
					speaker: 'reimu',
					id: 'e8deb968315e4344a3c1c4224268b9ca',
				},
				{
					text: 'そして Remotion はこの React で動画が作れるツールなんだ',
					speaker: 'marisa',
					id: '683a9acbf03d44a0963a2629ab369278',
				},
				{
					text: 'え、React は Web サイトを作れるものじゃなかったの？',
					speaker: 'reimu',
					id: '5d485beb04d8481e8990965157fb59d9',
				},
				{
					text: 'ああ、だからこれが最初に出てきた時はエンジニアたちも驚いてたぜ',
					speaker: 'marisa',
					id: '963272cf532c4b69b335b35d5b9851b1',
				},
				{
					text: 'とりあえず例を見せるとこんな感じのコードを書くと',
					speaker: 'marisa',
					id: '1cb4b285fed8443884fd47c8cb9a0a49',
				},
				{
					text: 'こういう動画が作れるんだ',
					speaker: 'marisa',
					id: '0a198e950de44452a26dce5c28d06acb',
				},
				{
					text: 'えーすごい！',
					speaker: 'reimu',
					id: '89824e0ab68c47778c5d9670994e28c8',
				},
				{
					text: 'でもプログラミングで作れると何が嬉しいの？',
					speaker: 'reimu',
					id: '1359620974c64dcf8096accbbdaf9e49',
				},
				{
					text: 'プログラミングで作れるとテキストでちょっといじるだけで色んな動画が作れるようになるから',
					speaker: 'marisa',
					id: '9278d0c086604d0391231b00e5941341',
				},
				{
					text: 'ある程度型が決まっているような動画の制作にはかなり向いてるぜ',
					speaker: 'marisa',
					id: '70918d20ad8548d89b680ae3a8d5f251',
				},
				{
					text: '私たちみたいな。',
					speaker: 'marisa',
					id: 'b617aadcf63e4ec7968f7d1aa81f7342',
				},
				{
					text: '私たちみたいな。',
					speaker: 'reimu',
					id: '9c29fe1597d3404e9c912854fe1e0c96',
				},
				{
					text: '逆にクリエイティブな動画にはあまり向いてないだろうな。',
					speaker: 'marisa',
					id: 'd122d6e2887048a78a6d1e98860cc3c5',
				},
			],
			totalFrames: 3332,
		},
	],
};
