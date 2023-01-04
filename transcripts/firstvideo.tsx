import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = {
	sections: [
		{
			title: 'イントロダクション',
			bgmSrc: '/audio/bgm/honobono-wartz.wav',
			backgroundVideo: '/video/cyber-bg.mp4',
			afterMovie: '/video/yukkuri-opening.mp4',
			afteMovieDelay: 29,
			fromFramesMap: {
				'0': 30,
				'1': 84,
				'2': 133,
				'3': 218,
				'4': 298,
				'5': 411,
				'6': 491,
				'7': 657,
				'8': 772,
				'9': 862,
				'10': 950,
				'11': 1018,
				'12': 1184,
				'13': 1214,
				'14': 1386,
				'15': 1429,
			},
			talks: [
				{
					text: 'ねえねえ魔理沙',
					speaker: 'reimu',
					id: '60d606d31980420d83b29621f2daf4c8',
					audioDurationFrames: 29,
				},
				{
					text: 'なんだ霊夢',
					speaker: 'marisa',
					id: 'cb14f393208b48d59da65f3294616f77',
					audioDurationFrames: 24,
				},
				{
					text: '私たちってめんどくさくない？',
					speaker: 'reimu',
					id: '7d9ac7bd74f9464b927418dfb7c4edb1',
					audioDurationFrames: 60,
				},
				{
					text: 'なんだ急にメンヘラみたいに',
					speaker: 'marisa',
					id: '649d4d3a767644848d9e552c5616f464',
					audioDurationFrames: 55,
				},
				{
					text: 'いや私たちってこうやって表情変えたり',
					speaker: 'reimu',
					id: 'c3798337ec364d3981f5cca0406c645f',
					face: 'saranidonbiki',
					audioDurationFrames: 88,
				},
				{
					text: '口パクや瞬きさせたり',
					speaker: 'reimu',
					id: 'fc221f15827b41c3b2695dc26821a034',
					audioDurationFrames: 55,
				},
				{
					text: '音声も一文一文音声ファイルを、作ったりしているわけじゃない',
					textForDisplay:
						'音声も一文一文音声ファイルを\n作ったりしているわけじゃない',
					speaker: 'reimu',
					id: 'a80c977f56424c9eba19c50764313ba3',
					audioDurationFrames: 141,
				},
				{
					text: '作っている人もよくやるなと感心するわ',
					speaker: 'reimu',
					id: '5b1d4e7fd22a4ef9a112d6ee40ae4d69',
					face: 'shonbori',
					audioDurationFrames: 90,
				},
				{
					text: 'そういうメタ的な話だったか',
					speaker: 'marisa',
					id: 'c4aafb05c4764b6e82e3b59eb40d6fff',
					audioDurationFrames: 65,
				},
				{
					text: 'それなら簡単な方法があるぜ',
					speaker: 'marisa',
					id: 'baac2d03cd144e56aadcf178741d186a',
					audioDurationFrames: 63,
				},
				{
					text: 'え、教えて教えて',
					speaker: 'reimu',
					id: 'f1cfa16253524cdbb9e22a8fb8d5cc3a',
					face: 'kirakira',
					audioDurationFrames: 43,
				},
				{
					text: '何を隠そう、今喋っている私たちもそれで作られているからな',
					textForDisplay:
						'何を隠そう、今喋っている私たちも\nそれで作られているからな',
					speaker: 'marisa',
					id: 'ad7b4567c78a4dbb8a1168850a97753f',
					audioDurationFrames: 141,
				},
				{
					text: 'え',
					speaker: 'reimu',
					id: '6be720eead3c42c19ff3406ba18f8e71',
					audioDurationFrames: 5,
				},
				{
					text: 'それじゃあプログラミングでゆっくり実況を作る方法を解説していくぜ',
					textForDisplay:
						'それじゃあプログラミングで\nゆっくり実況を作る方法を解説していくぜ',
					speaker: 'marisa',
					id: '22f5c6809c99427ab4538506253484e3',
					audioDurationFrames: 147,
				},
				{
					text: 'それでは',
					speaker: 'marisa',
					id: '09d07acd90694f02977af4ea98bc64ab',
					audioDurationFrames: 18,
				},
				{
					text: 'ゆっくりしていってね！',
					speaker: 'reimuAndMarisa',
					id: '71bb20ffb3e64af8a77306dbbe78ea42',
					audioDurationFrames: 40,
					ids: [
						'ffcde17278c047569c3f731050f892c1',
						'a2f0893dda1f469f946e9f372a93c816',
					],
				},
			],
			totalFrames: 1704,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			afterMovieFrames: 190,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
		},
		{
			title: 'Remotion の説明',
			bgmSrc: '/audio/bgm/Stay_On_Your_Mind.mp3',
			backgroundVideo: '/video/codebg.mp4',
			afterMovie: '/video/transition-space-yukkuri.mp4',
			initialDelayFrames: 60,
			fromFramesMap: {
				'0': 60,
				'1': 171,
				'2': 313,
				'3': 358,
				'4': 522,
				'5': 565,
				'6': 656,
				'7': 719,
				'8': 766,
				'9': 950,
				'10': 1164,
				'11': 1353,
				'12': 1482,
				'13': 1552,
				'14': 1642,
				'15': 1798,
				'16': 1846,
				'17': 1994,
				'18': 2125,
				'19': 2291,
				'20': 2415,
				'21': 2490,
				'22': 2534,
				'23': 2677,
				'24': 2713,
				'25': 2833,
				'26': 2975,
				'27': 3079,
				'28': 3170,
			},
			talks: [
				{
					text: 'プログラミングで作るってどういうことなの？',
					speaker: 'reimu',
					id: 'd7bc8a6c288c40ffa03c6e4a564c7209',
					audioDurationFrames: 86,
				},
				{
					text: '今回はRemotionっていう技術を使って作っていくぜ',
					textForDisplay: '今回は Remotion っていう\n技術を使って作っていくぜ',
					speaker: 'marisa',
					id: '1e4671b792b1408a81aa69e878819027',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 117,
				},
				{
					text: 'Remotion?',
					face: 'komari',
					speaker: 'reimu',
					id: 'a25e6fb06c4f46f588a1d054763a831b',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 20,
				},
				{
					text: 'Remotionはリアクトっていう技術を使って動画を作れるツールなんだ',
					textForDisplay:
						'RemotionはReactっていう技術を\n使って動画を作れるツールなんだ',
					speaker: 'marisa',
					id: '52b154e80a7c46009f0e227293e2388f',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 139,
				},
				{
					text: 'React?',
					face: 'komari',
					speaker: 'reimu',
					id: '21d9765861a647dab59b9103c94ae21a',
					audioDurationFrames: 18,
				},
				{
					text: 'ちょっと知らない単語がいっぱいだわ',
					speaker: 'reimu',
					id: 'b5b2ee8ad1854581a0cb8f8d786e0272',
					audioDurationFrames: 66,
				},
				{
					text: '順に説明して',
					speaker: 'reimu',
					id: '73d5aa70e88545fd8839c65eab549966',
					audioDurationFrames: 38,
				},
				{
					text: 'わかったぜ',
					speaker: 'marisa',
					id: '009d25673912467aaf1020c791a90f5a',
					audioDurationFrames: 22,
				},
				{
					text: 'リアクトはすごいざっくりいうとウェブサイトの見た目の部分を作るための技術だな',
					textForDisplay:
						'Reactはすごいざっくりいうと\nWebサイトの見た目の部分を作るための技術だな',
					speaker: 'marisa',
					id: 'aa6ae3720f8643f7a025660bec304183',
					image: {src: '/image/react-logo.png'},
					audioDurationFrames: 159,
				},
				{
					text: 'ウェブサイトを作るためにはHTMLやCSS、ジャバスクリプトという技術を使うんだが、',
					textForDisplay:
						'Web サイトを作るためには HTML や CSS\nJavaScript という技術を使うんだが、',
					speaker: 'marisa',
					id: 'e799ef06335f487188180676b15b3afa',
					image: {src: '/image/html_css_javascript.jpeg'},
					audioDurationFrames: 189,
				},
				{
					text: 'リアクトはリッチなサイトを作るときにそれらを便利に扱うための技術なんだ',
					textForDisplay:
						'React はリッチなサイトを作るときに\nそれらを便利に扱うための技術なんだ',
					speaker: 'marisa',
					id: '0fcf300f810d4267a87285ed778d9299',
					image: {src: '/image/html_css_javascript.jpeg'},
					audioDurationFrames: 164,
				},
				{
					text: '私たちの顔もこんな感じで見た目を作ってるぞ',
					speaker: 'marisa',
					id: 'ac4aab9b1d2043d19b69c53c14bd5dc2',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 104,
				},
				{
					text: 'これが私たちの顔...!',
					speaker: 'reimu',
					id: '72bd6cf465bf4bef8378869f94f76edf',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 45,
				},
				{
					text: '...これは...便利なの？',
					speaker: 'reimu',
					id: '534e71b3a3e64a67a142c4839b2b7363',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 65,
				},
				{
					text: 'まあとりあえずウェブサイトの見た目を作れるものと覚えていてくれ',
					textForDisplay:
						'まあとりあえずWebサイトの見た目を\n作れるものと覚えていてくれ',
					speaker: 'marisa',
					id: '19def0745e2b4af08cb3ac6aa125c61f',
					audioDurationFrames: 131,
				},
				{
					text: 'わかったわ',
					speaker: 'reimu',
					id: '414839d7f6b9430fa4a4dd1dc20042a2',
					audioDurationFrames: 23,
				},
				{
					text: 'そしてRemotionはこのリアクトで動画が作れるツールなんだ',
					textForDisplay:
						'そして Remotion はこの React で\n動画が作れるツールなんだ',
					speaker: 'marisa',
					id: '7b8fcb3c203846b485c965b04db8b40c',
					audioDurationFrames: 123,
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'え、リアクトはウェブサイトを作れるものじゃなかったの？',
					textForDisplay: 'え、ReactはWebサイトを作れるものじゃなかったの？',
					speaker: 'reimu',
					id: '734f83b7b8874c4dbae314b794bc7f14',
					audioDurationFrames: 106,
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'ああ、だからこれが最初に出てきた時はエンジニアたちも驚いてたぜ',
					textForDisplay:
						'ああ、だからこれが最初に出てきた時は\nエンジニアたちも驚いてたぜ',
					speaker: 'marisa',
					id: '317ae3e07c094a9baf3891448ce89e03',
					audioDurationFrames: 141,
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'とりあえず例を見せるとこんな感じのコードを書くと',
					textForDisplay: 'とりあえず例を見せると\nこんな感じのコードを書くと',
					speaker: 'marisa',
					id: '69b132cab44843d0ae774e84fc725aa1',
					audioDurationFrames: 99,
					image: {
						src: '/image/remotion-hello-world.png',
						backgroundColor: '#fff',
					},
				},
				{
					text: 'こういう動画が作れるんだ',
					speaker: 'marisa',
					id: 'f20b8cfd30dd4baf9aac813e5efeb8fa',
					audioDurationFrames: 50,
					backgroundVideo: {
						src: '/video/remotion-hello-world.mp4',
						extendTalksCount: 1,
					},
				},
				{
					text: 'えーすごい！',
					face: 'kirakira',
					speaker: 'reimu',
					id: 'dc829ef390a44509b6f7443ad666d2b2',
					audioDurationFrames: 19,
				},
				{
					text: 'こんなただのテキストが動画になるなんてなんだか不思議だわ',
					textForDisplay:
						'こんなただのテキストが\n動画になるなんてなんだか不思議だわ',
					speaker: 'reimu',
					id: '8877c09c789f48799946b8922f847e78',
					audioDurationFrames: 118,
					image: {
						src: '/image/remotion-hello-world.png',
						backgroundColor: '#fff',
					},
				},
				{
					text: 'だろ',
					speaker: 'marisa',
					id: '55fec8130df549e2b08a0c224ab4b0e3',
					audioDurationFrames: 11,
					image: {
						src: '/image/remotion-hello-world.png',
						backgroundColor: '#fff',
					},
				},
				{
					text: '...',
					speaker: 'reimu',
					customDuration: 120,
					id: '409ee34ff5834d8dbba6e4e6b90d4bb6',
					audioDurationFrames: 0,
				},
				{
					text: 'そういえば私たちもこれで作られてるって言ってたけど',
					textForDisplay:
						'そういえば私たちも\nこれで作られてるって言ってたけど',
					speaker: 'reimu',
					id: '0f1403fc5a824cd6a83b8bd70f8e3e22',
					audioDurationFrames: 117,
				},
				{
					text: 'それはどんな風に作られているのかしら？',
					face: 'komari',
					speaker: 'reimu',
					id: 'eeb62375d6864ef6bd7f6559a3d279e7',
					audioDurationFrames: 79,
				},
				{
					text: '次はそれについて話していこうか',
					speaker: 'marisa',
					id: '6810ed6b538748629599183d1fca6920',
					audioDurationFrames: 66,
				},
				{
					text: '楽しみだわ！',
					face: 'nikkori',
					speaker: 'reimu',
					id: '4d5c8614bf26479587da8d72001985d4',
					audioDurationFrames: 27,
				},
			],
			totalFrames: 3405,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
			afterMovieFrames: 180,
		},
		{
			title: 'Remotion でゆっくり',
			bgmSrc: '/audio/bgm/8bit_Game_Menu.mp3',
			bgmVolume: 0.1,
			backgroundVideo: '/video/editing-code.mp4',
			showBgVideoOverlay: true,
			afterMovie: '/video/transition-cool.mp4',
			fromFramesMap: {
				'0': 30,
				'1': 177,
				'2': 222,
				'3': 282,
				'4': 455,
				'5': 513,
				'6': 573,
				'7': 693,
				'8': 756,
				'9': 897,
				'10': 995,
				'11': 1115,
				'12': 1191,
				'13': 1319,
				'14': 1436,
				'15': 1539,
				'16': 1622,
				'17': 1789,
				'18': 1949,
				'19': 2054,
				'20': 2099,
				'21': 2141,
				'22': 2224,
				'23': 2265,
				'24': 2346,
				'25': 2510,
				'26': 2557,
				'27': 2676,
			},
			talks: [
				{
					text: 'それじゃあ私たちがどんな感じで作られているか見ていくぜ',
					textForDisplay:
						'それじゃあ私たちがどんな感じで\n作られているか見ていくぜ',
					speaker: 'marisa',
					id: '21bfbfbad915476fa246bb3b64cbfd8c',
					audioDurationFrames: 122,
				},
				{
					text: 'ワクワク',
					face: 'ryomeNikkori',
					speaker: 'reimu',
					id: 'e34dbdc1ce4546ddb10856b141cb84a7',
					audioDurationFrames: 20,
				},
				{
					text: 'まずは字幕だな',
					speaker: 'marisa',
					id: 'da394e515a274d48aeefbdcc55a79ae9',
					audioDurationFrames: 35,
				},
				{
					text: '字幕はすごいシンプルでテキストを書いてCSSで見た目を変えるだけだぜ',
					textForDisplay:
						'字幕はすごいシンプルでテキストを書いて\nCSSで見た目を変えるだけだぜ',
					speaker: 'marisa',
					id: 'c665b706a2434d86be6034efde01b58f',
					audioDurationFrames: 148,
				},
				{
					text: 'こんな感じだな',
					speaker: 'marisa',
					id: '98c06dd8f9b34fbea4b94f9e9d8604fb',
					image: {src: '/image/jimaku-code.png'},
					audioDurationFrames: 33,
				},
				{
					text: 'とてもシンプルね。',
					speaker: 'reimu',
					id: 'a828278a19d5499c8ac27e1a7e690365',
					image: {src: '/image/jimaku-code.png'},
					audioDurationFrames: 35,
				},
				{
					text: 'こういう感じでアニメーションさせることもできるぜ',
					speaker: 'marisa',
					id: '3e78742090af44b4b191df68a0d911a2',
					memoForEditor: 'これを frame によってアニメーションさせるようにする',
					customDuration: 120,
					customObjectKey: 'gunyogunyo',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 94,
				},
				{
					text: 'うわ、鬱陶しい',
					speaker: 'reimu',
					face: 'karukuhiiteru',
					id: '836ef0afe4ed4463b2b9a29b3230bb36',
					customObjectKey: 'gunyogunyo',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 38,
				},
				{
					text: 'ここはウェブサイトを作るのとほとんど感覚変わらないな',
					textForDisplay: 'ここはWebサイトを作るのと\nほとんど感覚変わらないな',
					speaker: 'marisa',
					id: '51fbd4e9d2ac40c28b4d779b260a129e',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 116,
				},
				{
					text: 'ちなみに今喋っている私たちだが、',
					speaker: 'marisa',
					id: '12fe8dc4e1034f2397ab5c451552210b',
					audioDurationFrames: 73,
				},
				{
					text: 'こんな感じの設定ファイルに記述しているぜ',
					speaker: 'marisa',
					id: 'b563ce2744cc46c399c61255cf3db5d7',
					customDuration: 120,
					image: {src: '/image/setting-file.png'},
					audioDurationFrames: 93,
				},
				{
					text: 'つまりこんな感じで書けば',
					speaker: 'marisa',
					id: 'dd549499a00843ff8000cca1858afd45',
					image: {src: '/image/reimu-talking-setting.png'},
					audioDurationFrames: 51,
				},
				{
					text: '猫ちゃん好き好き好き好き好き好き好き好き好き好き',
					speaker: 'reimu',
					face: 'mangaNikkori',
					id: 'b7101f250fc24e49a71c1f96e1086ea2',
					image: {src: '/image/reimu-talking-setting.png'},
					audioDurationFrames: 103,
				},
				{
					text: 'みたいに霊夢に発言させることも可能だ',
					speaker: 'marisa',
					id: 'ca2225a7b7e6486986052a57522f6bb8',
					audioDurationFrames: 92,
				},
				{
					text: 'はっ...私は一体今何を',
					speaker: 'reimu',
					id: 'f7161f88afc1447894c21827ebfbdaff',
					audioDurationFrames: 78,
				},
				{
					text: '次に音声の流し方だが、',
					speaker: 'marisa',
					id: 'd9f22173332b47399c09dfdbf2483066',
					audioDurationFrames: 58,
				},
				{
					text: 'オーディオというものがあるからこれで音声ファイルのパスを指定するだけだな',
					textForDisplay:
						'Audioというものがあるからこれで\n音声ファイルのパスを指定するだけだな',
					speaker: 'marisa',
					id: '90ab62d1503b41a19635f9b38b6a82ef',
					image: {src: '/image/audio-code-sample.png'},
					audioDurationFrames: 142,
				},
				{
					text: '例えばこんな感じだ',
					speaker: 'marisa',
					id: '3f18f175f321412f8b42c8beaa93ec7e',
					customDuration: 160,
					audio: {src: '/audio/sozai/nikusei.mp3', from: 64},
					image: {src: '/image/audio-code-sample.png'},
					audioDurationFrames: 43,
				},
				{
					text: '...何...今の野太い声は？',
					speaker: 'reimu',
					face: 'karukuhiiteru',
					delayFrames: 30,
					id: '8610ba7284424660929cb6d210649f5e',
					audioDurationFrames: 80,
				},
				{
					text: '作者だ。',
					speaker: 'marisa',
					id: 'a39ad24002e44de2a755094e59953f0f',
					audioDurationFrames: 20,
				},
				{
					text: '作者？',
					speaker: 'reimu',
					face: 'komari',
					id: '85466015248a4fe0b3c4e1509ca3dc9c',
					audioDurationFrames: 17,
				},
				{
					text: 'お次は動画を表示してみるぜ',
					speaker: 'marisa',
					id: 'e659f85bab3c4edca6a65bcee9a81658',
					audioDurationFrames: 58,
				},
				{
					text: 'ちょっと...',
					speaker: 'reimu',
					id: '3ed8688eebdd4eca8f437cad8a763529',
					audioDurationFrames: 16,
				},
				{
					text: 'と言っても動画もほぼ一緒だ。',
					speaker: 'marisa',
					id: '13dd2420fffb4881a4f08a2caead369b',
					image: {src: '/image/video-code-sample.png'},
					audioDurationFrames: 56,
				},
				{
					text: 'ビデオと言うものがあるからこれに動画ファイルのパスを指定するだけだぜ',
					textForDisplay:
						'Videoというものがあるから\nこれに動画ファイルのパスを指定するだけだぜ',
					speaker: 'marisa',
					id: '97a515140c62499bb66b8d4d2bd54024',
					image: {src: '/image/video-code-sample.png'},
					audioDurationFrames: 139,
					memoForEditor: '何かしら動画を載せる',
				},
				{
					text: 'あらかわいい',
					speaker: 'reimu',
					face: 'hokkori',
					id: 'a47c01e9ffa74135a5e3a5d4d7fe56d0',
					audioDurationFrames: 22,
				},
				{
					text: '作者が最近飼い始めた猫のルイ君だな',
					speaker: 'marisa',
					id: '5eaba579af6342428d3a0686c967d9db',
					audioDurationFrames: 94,
				},
				{
					text: '作者...一体誰なの...',
					speaker: 'reimu',
					face: 'hokkori',
					id: '15d7f11aebc24ebfb02bb13b5d1b979e',
					audioDurationFrames: 62,
				},
			],
			totalFrames: 2941,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
			afterMovieFrames: 150,
		},
		{
			title: 'プログラミングで動画が作れると何が嬉しいか',
			bgmSrc: '/audio/bgm/Something_Special_Secret.mp3',
			backgroundVideo: '/video/office.mp4',
			fromFramesMap: {
				'0': 30,
				'1': 92,
				'2': 229,
				'3': 401,
				'4': 456,
				'5': 527,
				'6': 738,
				'7': 805,
				'8': 926,
				'9': 1129,
				'10': 1261,
				'11': 1457,
				'12': 1569,
				'13': 1684,
				'14': 1895,
				'15': 2095,
				'16': 2242,
				'17': 2432,
				'18': 2657,
				'19': 2818,
				'20': 2977,
				'21': 3090,
				'22': 3317,
				'23': 3441,
				'24': 3476,
				'25': 3629,
				'26': 3849,
				'27': 4117,
				'28': 4196,
				'29': 4361,
				'30': 4559,
				'31': 4736,
				'32': 4942,
			},
			talks: [
				{
					text: 'ところでなんだけど',
					speaker: 'reimu',
					id: 'b6f83d68cfdc4ceb98d8970d147e4452',
					audioDurationFrames: 37,
				},
				{
					text: 'プログラミングで動画が作れると何が嬉しいのかしら？',
					textForDisplay:
						'プログラミングで動画が\n作れると何が嬉しいのかしら？',
					speaker: 'reimu',
					id: 'ca039253263f44d5a86c0c51149b1e22',
					audioDurationFrames: 112,
				},
				{
					text: 'だって世の中には高性能な動画制作ツールがたくさんあるじゃない？',
					textForDisplay:
						'だって世の中には高性能な\n動画制作ツールがたくさんあるじゃない？',
					speaker: 'reimu',
					id: 'f6d6eb0b0a4b4fdb84aedf31d5dc522b',
					audioDurationFrames: 147,
					backgroundVideo: {
						src: '/video/movie-makers.mp4',
						extendTalksCount: 1,
					},
				},
				{
					text: 'いい質問だな',
					speaker: 'marisa',
					id: '7332b096f0c64836af0bff4262e9b37f',
					audioDurationFrames: 30,
				},
				{
					text: 'メリットはいくつかあるぜ',
					speaker: 'marisa',
					id: 'c2afced1eb0542f68e6e4dd68b9762e5',
					audioDurationFrames: 46,
				},
				{
					text: '一つに同じ内容で少しコンテンツを差し替えた動画をたくさん作りたい場合に有効だ',
					textForDisplay:
						'一つに同じ内容で少しコンテンツを\n差し替えた動画をたくさん作りたい場合に有効だ',
					speaker: 'marisa',
					id: 'd88dcded12854cad96f71c992e0c5d2c',
					audioDurationFrames: 186,
					backgroundVideo: {
						src: '/video/generate-video.mp4',
						extendTalksCount: 1,
					},
				},
				{
					text: 'そんなことあるかしら？',
					speaker: 'reimu',
					face: 'komariKatame',
					id: '4f260ed6f3034101950745831f3877b3',
					audioDurationFrames: 42,
					memoForEditor: '上記の画像使う',
				},
				{
					text: '例としてギットハブアンラップドというものがあるぜ',
					textForDisplay: '例として GitHubUnwrapped というものがあるぜ',
					speaker: 'marisa',
					id: '5d29737e1f074bb4a76f4911f9706e4d',
					audioDurationFrames: 96,
					backgroundVideo: {
						src: '/video/GitHubUnwrapped.mp4',
						extendTalksCount: 3,
					},
				},
				{
					text: 'これはギットハブという設計図共有サイトで一年のまとめを動画にしたものだな',
					textForDisplay:
						'これはGitHubという設計図共有サイトで\n一年のまとめを動画にしたものだな',
					speaker: 'marisa',
					id: '0c630a43a870441baabe44be21fdc60d',
					audioDurationFrames: 178,
				},
				{
					text: 'ユーザのデータ毎に違う動画が動的に作れるんだ',
					speaker: 'marisa',
					id: 'affe5273fccb4e44ba2a96f1bc8a8167',
					audioDurationFrames: 107,
				},
				{
					text: 'ユーザ毎に違う動画...!それは確かにプログラミングじゃないと難しそうね',
					textForDisplay:
						'ユーザ毎に違う動画...!\nそれは確かにプログラミングじゃないと難しそうね',
					face: 'ryomeWink',
					speaker: 'reimu',
					id: 'ff646c15fa5644e3994bad8e74f545f1',
					audioDurationFrames: 171,
				},
				{
					text: 'あとは複数の言語に対応する時だな',
					speaker: 'marisa',
					id: '9e36be37996e46b1b5b717391200566d',
					audioDurationFrames: 87,
					memoForEditor: 'i18nっぽい画像作る',
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'なるほど！それはビジネスとかに便利そうね！',
					speaker: 'reimu',
					id: '61487deda4784b9896ace03e691a4731',
					audioDurationFrames: 90,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'この動画も設定ファイルの日本語を英語に翻訳するだけで英語版動画が完成するぜ',
					textForDisplay:
						'この動画も設定ファイルの日本語を\n英語に翻訳するだけで英語版動画が完成するぜ',
					speaker: 'marisa',
					id: 'fce3a13e57ff4189b67c33fc79db317a',
					audioDurationFrames: 186,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'まあ私たちは英語が喋れないから他の人工音声ツールを使った方がいいけどな',
					textForDisplay:
						'まあ私たちは英語が喋れないから\n他の人工音声ツールを使った方がいいけどな',
					speaker: 'marisa',
					id: 'a413ce160d7949c5bacad2cd9092a3ed',
					audioDurationFrames: 175,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'Our English is super horrible',
					speaker: 'reimu',
					id: '9f276e08bd6f4387b04e67c2837c9bf0',
					audioDurationFrames: 122,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'その他にもプログラミングで作れると色々自由度高く繋げられるのが便利だな',
					textForDisplay:
						'その他にもプログラミングで作れると\n色々自由度高く繋げられるのが便利だな',
					speaker: 'marisa',
					id: '92fde06c346a4b6b80b80f52097d6b23',
					audioDurationFrames: 165,
					backgroundVideo: {src: '/video/programming.mp4', extendTalksCount: 3},
				},
				{
					text: '例えば今回の動画もこういう文字列から音声も生成しつつ動画も生成している訳だが',
					textForDisplay:
						'例えば今回の動画もこういう文字列から\n音声も生成しつつ動画も生成している訳だが',
					speaker: 'marisa',
					id: '07181cbb4d58414b9f82a7d90185ab99',
					audioDurationFrames: 200,
					memoForEditor: 'プログラミングっぽい画像',
				},
				{
					text: '音声ライブラリや外部エーピーアイと繋げられたりして便利だったぜ',
					textForDisplay:
						'音声ライブラリや外部APIと\n繋げられたりして便利だったぜ',
					speaker: 'marisa',
					id: '819a08578511443abda498304f296afd',
					audioDurationFrames: 136,
					memoForEditor: 'プログラミングっぽい画像',
				},
				{
					text: 'なるほど！何言っているのか分からないけどとりあえず便利なのね！',
					textForDisplay:
						'なるほど！何言っているのか\n分からないけどとりあえず便利なのね！',
					speaker: 'reimu',
					face: 'kirakira',
					id: 'fefaf9e61d034f4f9a0fab36fde36e4b',
					audioDurationFrames: 134,
				},
				{
					text: 'あとこれはエンジニアとして思ったことなんだが、',
					speaker: 'marisa',
					id: '84db3f3ca0124012b5fb40e44b6a55c8',
					audioDurationFrames: 88,
					backgroundVideo: {src: '/video/programmer.mp4', extendTalksCount: 2},
				},
				{
					text: '動画制作ツールを一から学ぶよりはこのプログラミングで作れる方が遥かに簡単だったぜ',
					textForDisplay:
						'動画制作ツールを一から学ぶよりは\nこのプログラミングで作れる方が遥かに簡単だったぜ',
					speaker: 'marisa',
					id: '5e805a0ac5034d878d49596eefd9d95f',
					audioDurationFrames: 202,
				},
				{
					text: 'だからエンジニアには自信を持ってオススメできるな',
					speaker: 'marisa',
					id: 'dd3d7fa77d6c4a9db7f7aa9bbe41d70e',
					audioDurationFrames: 99,
				},
				{
					text: 'へー',
					speaker: 'reimu',
					id: '777e641977964e7fb215f4f424be17ef',
					audioDurationFrames: 10,
				},
				{
					text: 'こう聞くといいことばかりな気がするけど逆に欠点はないの',
					textForDisplay:
						'こう聞くといいことばかりな\n気がするけど逆に欠点はないの?',
					speaker: 'reimu',
					id: '8bac7dd49c8f41b293bed3ef3494e10d',
					audioDurationFrames: 128,
				},
				{
					text: 'そうだな、さっき言ったことの裏返しになるが、プログラミング未経験者にはオススメしづらいな',
					textForDisplay:
						'そうだな、さっき言ったことの裏返しになるが\nプログラミング未経験者にはオススメしづらいな',
					speaker: 'marisa',
					id: 'f1df38f5772f4b7685c8dccdec0559b8',
					audioDurationFrames: 195,
				},
				{
					text: 'おそらく動画制作ツールの使い方を学ぶより、プログラミングを一から学ぶ方がきっとハードル高いだろうからな',
					textForDisplay:
						'おそらく動画制作ツールの使い方を学ぶより\nプログラミングを一から学ぶ方がきっとハードル高いだろうからな',
					speaker: 'marisa',
					id: '6099a8c7bad344faac4f4f8af6f8fe6d',
					audioDurationFrames: 243,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'まあ...それはそうよね',
					speaker: 'reimu',
					face: 'komariKatame',
					id: 'fe6affca1c3a4056bc2c305cdf93d591',
					audioDurationFrames: 54,
				},
				{
					text: 'あとはトランジションやエフェクトなどはやはり動画制作ツールに負けるな',
					textForDisplay:
						'あとはトランジションやエフェクトなどは\nやはり動画制作ツールに負けるな',
					speaker: 'marisa',
					id: '9ddaaa8ae5e841249f947107e5140c1c',
					audioDurationFrames: 140,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'Remotionの場合全部自作したりライブラリを探す必要があるからちょっと大変だぜ',
					textForDisplay:
						'Remotionの場合全部自作したり\nライブラリを探す必要があるからちょっと大変だぜ',
					speaker: 'marisa',
					id: '61ef98c1f2d8426c90c17dd835c52bbc',
					audioDurationFrames: 173,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'なるほど〜オシャレな動画を作り込みたい場合はちょっと難易度が上がりそうね',
					textForDisplay:
						'なるほど〜オシャレな動画を作り込みたい場合は\nちょっと難易度が上がりそうね',
					speaker: 'reimu',
					face: 'komari',
					id: 'c1d8bde40168433fbc42ffde5d613fe8',
					audioDurationFrames: 152,
				},
				{
					text: 'まあでもゆっくり実況くらいなら許されると思うからそういう意味でも向いてると思うぜ',
					textForDisplay:
						'まあでもゆっくり実況くらいなら許されると\n思うからそういう意味でも向いてると思うぜ',
					speaker: 'marisa',
					id: 'd9bf3caf40c44b109e9fc3929f783220',
					audioDurationFrames: 181,
				},
				{
					text: 'この素朴さが有利に働くなんてすごいわね私たち！',
					speaker: 'reimu',
					face: 'nikkori',
					id: 'a8d42481f55e407bb7a273ccfe9bf068',
					audioDurationFrames: 115,
				},
			],
			totalFrames: 5087,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
		},
		{
			title: 'Remotion でゆっくり',
			bgmSrc: '/audio/bgm/10.mp3',
			backgroundVideo: '/video/codebg.mp4',
			fromFramesMap: {
				'0': 30,
				'1': 161,
				'2': 297,
				'3': 442,
				'4': 602,
				'5': 698,
				'6': 741,
				'7': 890,
				'8': 915,
				'9': 1002,
				'10': 1055,
				'11': 1148,
				'12': 1188,
				'13': 1231,
			},
			talks: [
				{
					text: 'プログラミングで動画が作れるなんて面白かったわ',
					speaker: 'reimu',
					id: 'bca7c0fd8df344b4b7edc6092967a40f',
					audioDurationFrames: 106,
				},
				{
					text: 'ああ、これでリッチな動画がたくさん作れるようになるな',
					speaker: 'marisa',
					id: '4d6ddcaeed40455f867295e660c5b6e4',
					audioDurationFrames: 111,
				},
				{
					text: 'いろんなサイトで動画が作られることが増えるかもしれないぜ',
					textForDisplay:
						'いろんなサイトで動画が作られることが\n増えるかもしれないぜ',
					speaker: 'marisa',
					id: '3e113b827c43437791db47e9aab4b6d9',
					audioDurationFrames: 120,
				},
				{
					text: 'それにしても私たちがコードでできてるなんてね、びっくりしたわ',
					textForDisplay:
						'それにしても私たちがコードでできてるなんてね\nびっくりしたわ',
					speaker: 'reimu',
					id: '5c9d8a24a9614bf38a7eaf1721bc8c49',
					audioDurationFrames: 135,
				},
				{
					text: 'いきなりアイデンティティが崩壊しちゃった',
					speaker: 'reimu',
					face: 'komariKatame',
					id: '4482afdde8b045fcba05fa81b3483ea4',
					audioDurationFrames: 71,
				},
				{
					text: 'そうだな',
					speaker: 'marisa',
					id: 'ddd5bc32c5cb4553835d0b1635802d5d',
					audioDurationFrames: 18,
				},
				{
					text: 'もしかしたら今これを見ている "あなた" もそうだったりしてな',
					textForDisplay:
						'もしかしたら今これを見ている\n"あなた"もそうだったりしてな',
					speaker: 'marisa',
					id: 'f9315b8fc41f44e8aaaca264650283c8',
					audioDurationFrames: 124,
				},
				{
					text: '？',
					speaker: 'reimu',
					face: 'komariKatame',
					id: 'b4ee4a32b6914a47af6854d75dcfa092',
					audioDurationFrames: 0,
				},
				{
					text: '誰に向かって話しかけてるの？',
					speaker: 'reimu',
					face: 'komariKatame',
					id: 'ef034f41cd01438889e1e6ac5f7657b2',
					audioDurationFrames: 62,
				},
				{
					text: 'なんでもないぜ',
					speaker: 'marisa',
					id: '0589a0a0994d46fca59ca6838ca2aa80',
					audioDurationFrames: 28,
				},
				{
					text: 'そろそろこの動画も終わりにしようか',
					speaker: 'marisa',
					id: '45eea1e106ce4c519bebb2760a855f71',
					audioDurationFrames: 68,
				},
				{
					text: 'そうね',
					speaker: 'reimu',
					id: '5cd9223caec94f2e83a9ce86fe936b16',
					audioDurationFrames: 15,
				},
				{
					text: 'それでは',
					speaker: 'marisa',
					id: '520c41518f2142fc8ca89a2c1bf8a1f5',
					audioDurationFrames: 18,
				},
				{
					text: '最後までご視聴いただきありがとうございました!',
					speaker: 'reimuAndMarisa',
					id: '8774bdbeaed14affad4d42f7f1e04a35',
					ids: [
						'd85d94a65b534b3cac2f445a802d2552',
						'c1b69b8b3c6d4d4da94aafb4f1ef224d',
					],
					audioDurationFrames: 96,
				},
			],
			totalFrames: 1376,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
		},
	],
};
