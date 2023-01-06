import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = {
	sections: [
		{
			title: 'イントロダクション',
			bgmSrc: '/audio/bgm/honobono-wartz.wav',
			backgroundVideo: '/video/cyber-bg.mp4',
			afterMovie: '/video/yukkuri-opening.mp4',
			afteMovieDelay: 0,
			fromFramesMap: {
				'0': 30,
				'1': 80,
				'2': 127,
				'3': 204,
				'4': 280,
				'5': 381,
				'6': 454,
				'7': 601,
				'8': 704,
				'9': 788,
				'10': 871,
				'11': 933,
				'12': 1088,
				'13': 1117,
				'14': 1279,
				'15': 1320,
			},
			talks: [
				{
					text: 'ねえねえ魔理沙',
					speaker: 'reimu',
					id: '59f8c2cd81334be5ab5cdc7899fad286',
					audioDurationFrames: 25,
				},
				{
					text: 'なんだ霊夢',
					speaker: 'marisa',
					id: '0ba332a465c3404a870de15cad021407',
					audioDurationFrames: 22,
				},
				{
					text: '私たちってめんどくさくない？',
					speaker: 'reimu',
					id: 'd611027830a14bb7b0832fa2f26de269',
					audioDurationFrames: 52,
				},
				{
					text: 'なんだ急にメンヘラみたいに',
					speaker: 'marisa',
					id: '2cad1252f5a848b59a59efc79f665432',
					audioDurationFrames: 51,
				},
				{
					text: 'いや私たちってこうやって表情変えたり',
					speaker: 'reimu',
					id: 'ecad2355fcd0431681464e7feabdecd1',
					face: 'saranidonbiki',
					mouth: '19',
					audioDurationFrames: 76,
				},
				{
					text: '口パクや瞬きさせたり',
					speaker: 'reimu',
					id: 'b99f642bd1054d518a5f62d055d2835c',
					audioDurationFrames: 48,
				},
				{
					text: '音声も一文一文音声ファイルを、作ったりしているわけじゃない',
					textForDisplay:
						'音声も一文一文音声ファイルを\n作ったりしているわけじゃない',
					speaker: 'reimu',
					id: '84cad4bc16a34311b4e2f3a3cf90a212',
					audioDurationFrames: 122,
				},
				{
					text: '作っている人もよくやるなと感心するわ',
					speaker: 'reimu',
					id: 'baffd14e7fe44de7ad5595477ca0a27d',
					face: 'shonbori',
					audioDurationFrames: 78,
				},
				{
					text: 'そういうメタ的な話だったか',
					speaker: 'marisa',
					id: '9d3231619e21408f92f5fea4ca017cf6',
					audioDurationFrames: 59,
				},
				{
					text: 'それなら簡単な方法があるぜ',
					speaker: 'marisa',
					id: '1785dc3f5b6c4bfcbaa73a059ce32798',
					audioDurationFrames: 58,
				},
				{
					text: 'え、教えて教えて',
					speaker: 'reimu',
					id: '6c05c3075dfa4a1daa160be158a3461f',
					face: 'kirakira',
					audioDurationFrames: 37,
				},
				{
					text: '何を隠そう、今喋っている私たちもそれで作られているからな',
					textForDisplay:
						'何を隠そう、今喋っている私たちも\nそれで作られているからな',
					speaker: 'marisa',
					id: '9946348225fa4daab0ebd71a9eb31482',
					audioDurationFrames: 130,
				},
				{
					text: 'え',
					speaker: 'reimu',
					id: '32ba94a9ea5044d785a1bd4d9d09f5ea',
					audioDurationFrames: 4,
				},
				{
					text: 'それじゃあプログラミングでゆっくり解説を作る方法を解説していくぜ',
					textForDisplay:
						'それじゃあプログラミングで\nゆっくり解説を作る方法を解説していくぜ',
					speaker: 'marisa',
					id: '5c2ddfb00bba4e93b4f3d676aea3c428',
					audioDurationFrames: 137,
				},
				{
					text: 'それでは',
					speaker: 'marisa',
					id: 'ed13ddc347a64842b01a99c7062685c5',
					audioDurationFrames: 16,
				},
				{
					text: 'ゆっくりしていってね！',
					speaker: 'reimuAndMarisa',
					id: '71bb20ffb3e64af8a77306dbbe78ea42',
					audioDurationFrames: 35,
					ids: [
						'fd7a5508021b4458b7eea3d6a33d96f3',
						'a3647928bb3047aaa96261e0969fb9c2',
					],
				},
			],
			totalFrames: 1595,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			afterMovieFrames: 190,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
		},
		{
			title: 'Remotion の説明',
			bgmSrc: '/audio/bgm/Stay_On_Your_Mind.mp3',
			backgroundVideo: '/video/codelike-bg.mp4',
			afterMovie: '/video/transition-space-yukkuri.mp4',
			initialDelayFrames: 60,
			fromFramesMap: {
				'0': 60,
				'1': 159,
				'2': 291,
				'3': 334,
				'4': 487,
				'5': 527,
				'6': 609,
				'7': 667,
				'8': 713,
				'9': 885,
				'10': 1083,
				'11': 1259,
				'12': 1379,
				'13': 1443,
				'14': 1524,
				'15': 1670,
				'16': 1715,
				'17': 1853,
				'18': 1970,
				'19': 2125,
				'20': 2241,
				'21': 2312,
				'22': 2354,
				'23': 2481,
				'24': 2516,
				'25': 2576,
				'26': 2702,
				'27': 2794,
				'28': 2880,
			},
			talks: [
				{
					text: 'プログラミングで作るってどういうことなの？',
					speaker: 'reimu',
					id: '18d857ba806a4ce9945ec4e3669bbd02',
					audioDurationFrames: 74,
				},
				{
					text: '今回はRemotionっていう技術を使って作っていくぜ',
					textForDisplay: '今回は Remotion っていう\n技術を使って作っていくぜ',
					speaker: 'marisa',
					id: 'ed20efb544c54ef1b0d199c8d891cd79',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 107,
				},
				{
					text: 'Remotion?',
					face: 'komari',
					speaker: 'reimu',
					id: '39ad73e84e954f04b5c6fc8e127904ae',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 18,
				},
				{
					text: 'Remotionはリアクトっていう技術を使って動画を作れるツールなんだ',
					textForDisplay:
						'RemotionはReactっていう技術を\n使って動画を作れるツールなんだ',
					speaker: 'marisa',
					id: '9836febf5ee941eb946e74c0054b8fd4',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 128,
				},
				{
					text: 'React?',
					face: 'komari',
					speaker: 'reimu',
					id: 'b81ca94350bc4249b6dee17d9554eb66',
					audioDurationFrames: 15,
				},
				{
					text: 'ちょっと知らない単語がいっぱいだわ',
					speaker: 'reimu',
					id: '1c257fc24b7042fdb9546d80049678c1',
					audioDurationFrames: 57,
				},
				{
					text: '順に説明して',
					speaker: 'reimu',
					id: 'e5d94e6a897f435d913d3ea0c8b0d612',
					audioDurationFrames: 33,
				},
				{
					text: 'わかったぜ',
					speaker: 'marisa',
					id: '348f4d00fbe44436b478d18bf138bd5b',
					audioDurationFrames: 21,
				},
				{
					text: 'リアクトはすごいざっくりいうとウェブサイトの見た目の部分を作るための技術だな',
					textForDisplay:
						'Reactはすごいざっくりいうと\nWebサイトの見た目の部分を作るための技術だな',
					speaker: 'marisa',
					id: 'f30108ab43784ec2999a7676ad6286e0',
					image: {src: '/image/react-logo.png'},
					audioDurationFrames: 147,
				},
				{
					text: 'ウェブサイトを作るためにはHTMLやCSS、ジャバスクリプトという技術を使うんだが、',
					textForDisplay:
						'Web サイトを作るためには HTML や CSS\nJavaScript という技術を使うんだが、',
					speaker: 'marisa',
					id: '4779b7b641f64cb18f86e8c6c9a0703d',
					image: {src: '/image/html_css_javascript.jpeg'},
					audioDurationFrames: 173,
				},
				{
					text: 'リアクトはリッチなサイトを作るときにそれらを便利に扱うための技術なんだ',
					textForDisplay:
						'React はリッチなサイトを作るときに\nそれらを便利に扱うための技術なんだ',
					speaker: 'marisa',
					id: '44cdbe95a6b0439aab0272b78d85cbd9',
					image: {src: '/image/html_css_javascript.jpeg'},
					audioDurationFrames: 151,
				},
				{
					text: '私たちの顔もこんな感じで見た目を作ってるぞ',
					speaker: 'marisa',
					id: '16cfe1d5aaad4a35808eab1fb2a64102',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 95,
				},
				{
					text: 'これが私たちの顔...!',
					speaker: 'reimu',
					face: 'kirakira',
					id: '97767f15942641e3bbd4b999daf8c879',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 39,
				},
				{
					text: '...これは...便利なの？',
					speaker: 'reimu',
					face: 'komariKatame',
					mouth: '08',
					id: '3a5ce2d7e3334766ba79daedf37e4a61',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 56,
				},
				{
					text: 'まあとりあえずウェブサイトの見た目を作れるものと覚えていてくれ',
					textForDisplay:
						'まあとりあえずWebサイトの見た目を\n作れるものと覚えていてくれ',
					speaker: 'marisa',
					id: '5dd79db5027b4ff5af59e1529740a1b7',
					audioDurationFrames: 121,
				},
				{
					text: 'わかったわ',
					speaker: 'reimu',
					id: '16d07fa7605f416c9b7b299e4cc3a4bd',
					audioDurationFrames: 20,
				},
				{
					text: 'そしてRemotionはこのリアクトで動画が作れるツールなんだ',
					textForDisplay:
						'そして Remotion はこの React で\n動画が作れるツールなんだ',
					speaker: 'marisa',
					id: '72ec0cbc85644455a673899e4d46e836',
					audioDurationFrames: 113,
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'え、リアクトはウェブサイトを作れるものじゃなかったの？',
					textForDisplay: 'え、ReactはWebサイトを\n作れるものじゃなかったの？',
					speaker: 'reimu',
					id: '047af195bf7344899c6aab1cde9d60a6',
					audioDurationFrames: 92,
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'ああ、だからこれが最初に出てきた時はエンジニアたちも驚いてたぜ',
					textForDisplay:
						'ああ、だからこれが最初に出てきた時は\nエンジニアたちも驚いてたぜ',
					speaker: 'marisa',
					id: 'c3b8037ceea64d709db6c43f0bb46c64',
					audioDurationFrames: 130,
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'とりあえず例を見せるとこんな感じのコードを書くと',
					textForDisplay: 'とりあえず例を見せると\nこんな感じのコードを書くと',
					speaker: 'marisa',
					id: '50422821cb044c0d8d4109724a0d884e',
					audioDurationFrames: 91,
					image: {src: '/image/remotion-hello-world.png'},
				},
				{
					text: 'こういう動画が作れるんだ',
					speaker: 'marisa',
					id: 'c4758a08745842d594d0a1846a9c82c7',
					audioDurationFrames: 46,
					backgroundVideo: {
						src: '/video/remotion-hello-world.mp4',
						extendTalksCount: 1,
					},
				},
				{
					text: 'えーすごい！',
					face: 'kirakira',
					speaker: 'reimu',
					id: '3b46151e424f401580f20f26615bfe12',
					audioDurationFrames: 17,
				},
				{
					text: 'こんなただのテキストが動画になるなんてなんだか不思議だわ',
					textForDisplay:
						'こんなただのテキストが\n動画になるなんてなんだか不思議だわ',
					speaker: 'reimu',
					id: '0ad8a4984e1747d8a6670e6b47e6d05b',
					audioDurationFrames: 102,
					image: {src: '/image/remotion-hello-world.png'},
				},
				{
					text: 'だろ',
					speaker: 'marisa',
					id: 'b57e02016ecf4dc9a91f7ecf127308ca',
					audioDurationFrames: 10,
					image: {src: '/image/remotion-hello-world.png'},
				},
				{
					text: '...',
					speaker: 'reimu',
					face: 'komari',
					mouth: '08',
					customDuration: 60,
					id: '6ef0f136a0c74da6b4bab9247fdc9f69',
					audioDurationFrames: 0,
				},
				{
					text: 'そういえば私たちもこれで作られてるって言ってたけど',
					textForDisplay:
						'そういえば私たちも\nこれで作られてるって言ってたけど',
					speaker: 'reimu',
					id: 'a35ceee2805a4fe1b7efd63155119213',
					audioDurationFrames: 101,
				},
				{
					text: 'それはどんなふうに作られているのかしら？',
					textForDisplay: 'それはどんな風に作られているのかしら？',
					face: 'komari',
					speaker: 'reimu',
					id: '93a93f43961d4861b7904c0ffec82bf9',
					audioDurationFrames: 67,
				},
				{
					text: '次はそれについて話していこうか',
					speaker: 'marisa',
					id: '8e426642765a48d5a86c8e231eb0f821',
					audioDurationFrames: 61,
				},
				{
					text: '楽しみだわ！',
					face: 'nikkori',
					speaker: 'reimu',
					id: '9f6c41f8e6e1406faa9962f62d6a6b6d',
					audioDurationFrames: 23,
				},
			],
			totalFrames: 3115,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
			afterMovieFrames: 180,
		},
		{
			title: 'Remotion でゆっくり',
			bgmSrc: '/audio/bgm/8bit_Game_Menu.mp3',
			bgmVolume: 0.08,
			backgroundVideo: '/video/editing-code.mp4',
			showBgVideoOverlay: true,
			afterMovie: '/video/isometric-yukkuri.mp4',
			fromFramesMap: {
				'0': 30,
				'1': 168,
				'2': 210,
				'3': 267,
				'4': 428,
				'5': 483,
				'6': 538,
				'7': 658,
				'8': 716,
				'9': 848,
				'10': 940,
				'11': 1050,
				'12': 1122,
				'13': 1236,
				'14': 1345,
				'15': 1437,
				'16': 1516,
				'17': 1672,
				'18': 1832,
				'19': 1926,
				'20': 1969,
				'21': 2008,
				'22': 2087,
				'23': 2126,
				'24': 2203,
				'25': 2352,
				'26': 2440,
				'27': 2484,
				'28': 2611,
			},
			talks: [
				{
					text: 'それじゃあ私たちがどんな感じで作られているか見ていくぜ',
					textForDisplay:
						'それじゃあ私たちがどんな感じで\n作られているか見ていくぜ',
					speaker: 'marisa',
					id: 'cb29d7fc7f154769a2c221268c26262d',
					audioDurationFrames: 113,
				},
				{
					text: 'ワクワク',
					face: 'ryomeNikkori',
					speaker: 'reimu',
					id: '2fc584cc7ff0456e82afd14519023391',
					audioDurationFrames: 17,
				},
				{
					text: 'まずは字幕だな',
					speaker: 'marisa',
					id: '18f4a7bdd101466bbade94330d823ec2',
					audioDurationFrames: 32,
				},
				{
					text: '字幕はすごいシンプルでテキストを書いてCSSで見た目を変えるだけだぜ',
					textForDisplay:
						'字幕はすごいシンプルでテキストを書いて\nCSSで見た目を変えるだけだぜ',
					speaker: 'marisa',
					id: 'b1117dce57da4b99805643873ace61ee',
					audioDurationFrames: 136,
				},
				{
					text: 'こんな感じだな',
					speaker: 'marisa',
					id: '88f34f4fc5a54233844071aa22f5cd62',
					image: {src: '/image/jimaku-code.png'},
					audioDurationFrames: 30,
				},
				{
					text: 'とてもシンプルね。',
					speaker: 'reimu',
					id: 'e476d9e4e76e41cd98dbcf49c2d3ea60',
					image: {src: '/image/jimaku-code.png'},
					audioDurationFrames: 30,
				},
				{
					text: 'こういう感じでアニメーションさせることもできるぜ',
					speaker: 'marisa',
					id: '8bf767ae322a4c2d96916c736281d57f',
					memoForEditor: 'これを frame によってアニメーションさせるようにする',
					customDuration: 120,
					customObjectKey: 'gunyogunyo',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 86,
				},
				{
					text: 'うわ、鬱陶しい',
					speaker: 'reimu',
					face: 'karukuhiiteru',
					id: 'b6d687d4035948b0b85cad6910a7ba06',
					customObjectKey: 'gunyogunyo',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 33,
				},
				{
					text: 'ここはウェブサイトを作るのとほとんど感覚変わらないな',
					textForDisplay: 'ここはWebサイトを作るのと\nほとんど感覚変わらないな',
					speaker: 'marisa',
					id: 'a2d73121c40644e1a11d67b2773413a9',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 107,
				},
				{
					text: 'ちなみに今喋っている私たちだが、',
					speaker: 'marisa',
					id: '2b3b4f8be268440ca2a518f127e56ed2',
					audioDurationFrames: 67,
				},
				{
					text: 'こんな感じの設定ファイルに記述しているぜ',
					speaker: 'marisa',
					id: '58518baa8859498fab28e6e90d1055e0',
					image: {src: '/image/setting-file.png'},
					audioDurationFrames: 85,
				},
				{
					text: 'つまりこんな感じで書けば',
					speaker: 'marisa',
					id: '64a5864a7200474a9448467f8efd7b2b',
					image: {src: '/image/reimu-talking-setting.png'},
					audioDurationFrames: 47,
				},
				{
					text: '猫ちゃん好き好き好き好き好き好き好き好き好き好き',
					speaker: 'reimu',
					face: 'mangaNikkori',
					mouth: '28',
					id: 'ddb955c03f774aaeab130a2caa7410c2',
					image: {src: '/image/reimu-talking-setting.png'},
					audioDurationFrames: 89,
				},
				{
					text: 'みたいに霊夢に発言させることも可能だ',
					speaker: 'marisa',
					id: '34126461770e40968e2e9a10fde1edfd',
					audioDurationFrames: 84,
				},
				{
					text: 'はっ...私は一体今何を',
					speaker: 'reimu',
					face: 'komari',
					mouth: '25',
					id: '2d77d5b1faa645898ca667ff7ece368a',
					audioDurationFrames: 67,
				},
				{
					text: '次に音声の流し方だが、',
					speaker: 'marisa',
					id: '0003804f1d6b47529dc5fde8321031de',
					audioDurationFrames: 54,
				},
				{
					text: 'オーディオというものがあるからこれで音声ファイルのパスを指定するだけだな',
					textForDisplay:
						'Audioというものがあるからこれで\n音声ファイルのパスを指定するだけだな',
					speaker: 'marisa',
					id: 'a463b032e70d4d96aac2ca7b97108226',
					image: {src: '/image/audio-code-sample.png'},
					audioDurationFrames: 131,
				},
				{
					text: '例えばこんな感じだ',
					speaker: 'marisa',
					id: 'acb34654f7ad4e5096055513f19b0a7f',
					customDuration: 160,
					audio: {src: '/audio/sozai/nikusei.mp3', from: 64, volume: 10},
					image: {src: '/image/audio-code-sample.png'},
					audioDurationFrames: 40,
				},
				{
					text: '...何...今の野太い声は？',
					speaker: 'reimu',
					face: 'karukuhiiteru',
					delayFrames: 30,
					id: '5de5677271f64fd8a5b79627d0ef55b6',
					audioDurationFrames: 69,
				},
				{
					text: '作者だ。',
					speaker: 'marisa',
					id: '5f246c1a30994bdea040626296e76882',
					audioDurationFrames: 18,
				},
				{
					text: '作者？',
					speaker: 'reimu',
					face: 'komari',
					id: '4d67496b8e7c4354893b9cd6b2a53716',
					audioDurationFrames: 14,
				},
				{
					text: 'お次は動画を表示してみるぜ',
					speaker: 'marisa',
					id: '7c203d472baa4350acff3531c67c4f71',
					audioDurationFrames: 54,
				},
				{
					text: 'ちょっと...',
					speaker: 'reimu',
					id: '06822667ce92493f9abaf8c1c000b6b5',
					audioDurationFrames: 14,
				},
				{
					text: 'と言っても動画もほぼ一緒だ。',
					speaker: 'marisa',
					id: '5de0c9a7951a4bc68524cf311958efa9',
					image: {src: '/image/video-code-sample.png'},
					audioDurationFrames: 52,
				},
				{
					text: 'ビデオと言うものがあるからこれに動画ファイルのパスを指定するだけだ',
					textForDisplay:
						'Videoというものがあるから\nこれに動画ファイルのパスを指定するだけだ',
					speaker: 'marisa',
					id: 'd2e588d61e5046b9b6c72226150c76ed',
					image: {src: '/image/video-code-sample.png'},
					audioDurationFrames: 124,
					memoForEditor: '何かしら動画を載せる',
				},
				{
					text: 'こうするとこんなふうに表示できるぜ',
					textForDisplay: 'こうするとこんな風に表示できるぜ',
					speaker: 'marisa',
					id: '62d13235a8ba4b59acbc50434f458c95',
					backgroundVideo: {src: '/video/cat.MOV', extendTalksCount: 3},
					audioDurationFrames: 63,
				},
				{
					text: 'あらかわいい',
					speaker: 'reimu',
					face: 'hokkori',
					id: '45bc6563cb984636887df68d4e27a38d',
					audioDurationFrames: 19,
				},
				{
					text: '作者の昔の家の近所にいた野良猫のドラちゃんだ',
					textForDisplay: '作者の昔の家の近所にいた\n野良猫のドラちゃんだ',
					speaker: 'marisa',
					id: '90af7c776fe844c79d20f03f411a9401',
					audioDurationFrames: 102,
				},
				{
					text: '...',
					textForDisplay: '(野良猫に名前つけてる...)',
					speaker: 'reimu',
					face: 'komari',
					mouth: '09',
					id: '73f0a788f69a40acba5ed55a6358ab83',
					audioDurationFrames: 0,
					customDuration: 90,
				},
			],
			totalFrames: 2823,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
			afterMovieFrames: 157,
		},
		{
			title: 'プログラミングで動画が作れると何が嬉しいか',
			bgmSrc: '/audio/bgm/Something_Special_Secret.mp3',
			bgmVolume: 0.25,
			backgroundVideo: '/video/office.mp4',
			showBgVideoOverlay: true,
			afterMovie: '/video/final-cutin.mp4',
			afterMovieVolume: 0.2,
			fromFramesMap: {
				'0': 30,
				'1': 87,
				'2': 208,
				'3': 360,
				'4': 413,
				'5': 480,
				'6': 676,
				'7': 737,
				'8': 850,
				'9': 1039,
				'10': 1163,
				'11': 1336,
				'12': 1441,
				'13': 1540,
				'14': 1736,
				'15': 1922,
				'16': 2053,
				'17': 2230,
				'18': 2423,
				'19': 2573,
				'20': 2714,
				'21': 2820,
				'22': 3019,
				'23': 3135,
				'24': 3169,
				'25': 3305,
				'26': 3510,
				'27': 3748,
				'28': 3820,
				'29': 3974,
				'30': 4158,
				'31': 4315,
				'32': 4517,
			},
			talks: [
				{
					text: 'ところでなんだけど',
					speaker: 'reimu',
					id: '7b658ae449014838ba633d3b9936cb3b',
					audioDurationFrames: 32,
				},
				{
					text: 'プログラミングで動画が作れると何が嬉しいのかしら？',
					textForDisplay:
						'プログラミングで動画が\n作れると何が嬉しいのかしら？',
					speaker: 'reimu',
					id: '5aecf368c1864313ab9288f06e44682f',
					audioDurationFrames: 96,
				},
				{
					text: 'だって世の中には高性能な動画制作ツールがたくさんあるじゃない？',
					textForDisplay:
						'だって世の中には高性能な\n動画制作ツールがたくさんあるじゃない？',
					speaker: 'reimu',
					id: '5f70f4fe6203409d906967031647b883',
					audioDurationFrames: 127,
					backgroundVideo: {
						src: '/video/movie-makers.mp4',
						extendTalksCount: 1,
					},
				},
				{
					text: 'いい質問だな',
					speaker: 'marisa',
					id: 'b2d71cb117a942b0a71fb75b2c0b3d30',
					audioDurationFrames: 28,
				},
				{
					text: 'メリットはいくつかあるぜ',
					speaker: 'marisa',
					id: '0efbd1d2704e446289717df6a0997227',
					audioDurationFrames: 42,
				},
				{
					text: '一つに同じ内容で少しコンテンツを差し替えた動画をたくさん作りたい場合に有効だ',
					textForDisplay:
						'一つに同じ内容で少しコンテンツを\n差し替えた動画をたくさん作りたい場合に有効だ',
					speaker: 'marisa',
					id: '054edcf0ff3d46ae968ab151547c187c',
					audioDurationFrames: 171,
					backgroundVideo: {
						src: '/video/generate-video.mp4',
						extendTalksCount: 1,
					},
				},
				{
					text: 'そんなことあるかしら？',
					speaker: 'reimu',
					face: 'komariKatame',
					mouth: '08',
					id: '198872e144d843249fa50420fc61d9d2',
					audioDurationFrames: 36,
					memoForEditor: '上記の画像使う',
				},
				{
					text: '例としてギットハブアンラップドというものがあるぜ',
					textForDisplay: '例として GitHubUnwrapped\nというものがあるぜ',
					speaker: 'marisa',
					id: '948d69bb01f64fc594f481b6f0d3b2c4',
					audioDurationFrames: 88,
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
					id: '080c0d0a90e94c5490ca46efbdf8ed97',
					audioDurationFrames: 164,
				},
				{
					text: 'ユーザのデータ毎に違う動画が動的に作れるんだ',
					textForDisplay: 'ユーザのデータ毎に\n違う動画が動的に作れるんだ',
					speaker: 'marisa',
					id: 'a690941bf44e439a83a882d3573a9b8d',
					audioDurationFrames: 99,
				},
				{
					text: 'ユーザ毎に違う動画...!それは確かにプログラミングじゃないと難しそうね',
					textForDisplay:
						'ユーザ毎に違う動画...!\nそれは確かにプログラミングじゃないと難しそうね',
					face: 'kirakira',
					speaker: 'reimu',
					id: '8c49a0be430a4b2ebeb697e672cf522b',
					audioDurationFrames: 148,
				},
				{
					text: 'あとは複数の言語に対応する時だな',
					speaker: 'marisa',
					id: 'c447d5c501484ebdbcba8049aacacc81',
					audioDurationFrames: 80,
					memoForEditor: 'i18nっぽい画像作る',
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'なるほど！それはビジネスとかに便利そう！',
					speaker: 'reimu',
					id: '883716a9377a4f0ab6b5639dafb0f993',
					audioDurationFrames: 74,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'この動画も設定ファイルの日本語を英語に翻訳するだけで英語版動画が完成するぜ',
					textForDisplay:
						'この動画も設定ファイルの日本語を\n英語に翻訳するだけで英語版動画が完成するぜ',
					speaker: 'marisa',
					id: '524cd1850a204a91b707b077fc7cd40d',
					audioDurationFrames: 171,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'まあ私たちは英語が喋れないから他の人工音声ツールを使った方がいいけどな',
					textForDisplay:
						'まあ私たちは英語が喋れないから\n他の人工音声ツールを使った方がいいけどな',
					speaker: 'marisa',
					id: '899e175783fb4870b006a0f4f4f6d272',
					audioDurationFrames: 161,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'Our English is super horrible',
					speaker: 'reimu',
					face: 'mangaNikkori',
					mouth: '28',
					id: 'ada80877f2d446d9ab96212333d5f3a5',
					audioDurationFrames: 106,
					image: {src: '/image/i18n.png'},
				},
				{
					text: 'その他にもプログラミングで作れると色々自由度高く繋げられるのが便利だな',
					textForDisplay:
						'その他にもプログラミングで作れると\n色々自由度高く繋げられるのが便利だな',
					speaker: 'marisa',
					id: '198becf596f24e309f5d6d2bc8bac0f2',
					audioDurationFrames: 152,
					backgroundVideo: {src: '/video/programming.mp4', extendTalksCount: 3},
				},
				{
					text: '例えば今回の動画も文字列から音声も生成しつつ動画も生成している訳だが',
					textForDisplay:
						'例えば今回の動画も文字列から\n音声も生成しつつ動画も生成している訳だが',
					speaker: 'marisa',
					id: '55173237b3454b33bf35ba07f8044a14',
					audioDurationFrames: 168,
				},
				{
					text: '音声ライブラリや外部エーピーアイと繋げられたりして便利だったぜ',
					textForDisplay:
						'音声ライブラリや外部APIと\n繋げられたりして便利だったぜ',
					speaker: 'marisa',
					id: '5bc0ee476dc04a4489e7e2fedc250785',
					audioDurationFrames: 125,
					memoForEditor: 'プログラミングっぽい画像',
				},
				{
					text: 'なるほど！何言っているのか分からないけどとりあえず便利なのね！',
					textForDisplay:
						'なるほど！何言っているのか\n分からないけどとりあえず便利なのね！',
					speaker: 'reimu',
					face: 'kirakira',
					id: '046e0a938d6d422195f24ac1b2d6ab83',
					audioDurationFrames: 116,
				},
				{
					text: 'あとこれはエンジニアとして思ったことなんだが、',
					speaker: 'marisa',
					id: '41ecb4b35dcc4774a9a38890da0f0e1d',
					audioDurationFrames: 81,
					backgroundVideo: {src: '/video/programmer.mp4', extendTalksCount: 2},
				},
				{
					text: '動画制作ツールを一から学ぶよりはプログラミングで作れる方が遥かに簡単だったぜ',
					textForDisplay:
						'動画制作ツールを一から学ぶよりは\nプログラミングで作れる方が遥かに簡単だったぜ',
					speaker: 'marisa',
					id: '549778ac0e42490bbb3996427db704ca',
					audioDurationFrames: 174,
				},
				{
					text: 'だからエンジニアには自信を持ってオススメできるな',
					textForDisplay: 'だからエンジニアには\n自信を持ってオススメできるな',
					speaker: 'marisa',
					id: 'bdebc844158945f0a6be3f53b2d63660',
					audioDurationFrames: 91,
				},
				{
					text: 'へー',
					speaker: 'reimu',
					id: 'bb3574cf53b84c38b95b966774414599',
					audioDurationFrames: 9,
				},
				{
					text: 'こう聞くといいことばかりな気がするけど逆に欠点はないの',
					textForDisplay:
						'こう聞くといいことばかりな\n気がするけど逆に欠点はないの?',
					speaker: 'reimu',
					face: 'komari',
					id: '962f23e2c76d437a90225780022d4c75',
					audioDurationFrames: 111,
				},
				{
					text: 'そうだな、さっき言ったことの裏返しになるが、プログラミング未経験者にはオススメしづらいな',
					textForDisplay:
						'さっき言ったことの裏返しになるが\nプログラミング未経験者にはオススメしづらいな',
					speaker: 'marisa',
					id: 'f28145d17e4544a8909df0c8e853f63a',
					audioDurationFrames: 180,
					backgroundVideo: {src: '/video/study.mp4', extendTalksCount: 2},
				},
				{
					text: 'おそらく動画制作ツールの使い方を学ぶより、プログラミングを一から学ぶ方がハードル高いだろうからな',
					textForDisplay:
						'動画制作ツールの使い方を学ぶより\nプログラミングを一から学ぶ方がハードル高いだろうからな',
					speaker: 'marisa',
					id: 'e6dba4c2646d4ae5bdd78c910420f0b6',
					audioDurationFrames: 213,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'まあ...それはそうよね',
					speaker: 'reimu',
					face: 'komariKatame',
					id: 'd0ff854305bc40668b965f6f53dcc5c3',
					audioDurationFrames: 47,
				},
				{
					text: 'あとはトランジションやエフェクトなどはやはり動画制作ツールに負けるな',
					textForDisplay:
						'あとはトランジションやエフェクトなどは\nやはり動画制作ツールに負けるな',
					speaker: 'marisa',
					id: 'f0d3d3b8fa19404db61216eef0cbb9ff',
					audioDurationFrames: 129,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
					backgroundVideo: {src: '/video/edit-movie.mp4', extendTalksCount: 2},
				},
				{
					text: 'Remotionの場合全部自作したりライブラリを探す必要があるからちょっと大変だぜ',
					textForDisplay:
						'Remotionの場合全部自作したり\nライブラリを探す必要があるからちょっと大変だぜ',
					speaker: 'marisa',
					id: 'ebd7e93512f840dd83dae687463e340c',
					audioDurationFrames: 159,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'なるほど〜オシャレな動画を作り込みたい場合はちょっと難易度が上がりそうね',
					textForDisplay:
						'なるほど〜オシャレな動画を\n作り込みたい場合はちょっと難易度が上がりそうね',
					speaker: 'reimu',
					face: 'komari',
					id: 'e4dce4750fd04ffe836620f2031e30f7',
					audioDurationFrames: 132,
				},
				{
					text: 'まあゆっくり実況くらいなら許されると思うからそういう意味でも私たちはむいてると思うぜ',
					textForDisplay:
						'まあゆっくり実況くらいなら許されると\n思うからそういう意味でも私たちは向いてると思うぜ',
					speaker: 'marisa',
					id: '6a2beec1b53a4eeab86d61b3b07689d8',
					audioDurationFrames: 177,
				},
				{
					text: 'この素朴さが有利に働くなんてすごいわね私たち！',
					textForDisplay: 'この素朴さが有利に働くなんて\nすごいわね私たち！',
					speaker: 'reimu',
					face: 'nikkori',
					mouth: '06',
					id: 'afa20f4e18f043a49ff24776384b571f',
					audioDurationFrames: 100,
				},
			],
			totalFrames: 4845,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
			afterMovieFrames: 183,
		},
		{
			title: 'Remotion でゆっくり',
			bgmSrc: '/audio/bgm/Flutter.mp3',
			bgmVolume: 0.25,
			backgroundVideo: '/video/codebg.mp4',
			afterMovie: '/video/codebg-for-last.mp4',
			fromFramesMap: {
				'0': 30,
				'1': 147,
				'2': 274,
				'3': 410,
				'4': 551,
				'5': 640,
				'6': 682,
				'7': 821,
				'8': 881,
				'9': 960,
				'10': 1011,
				'11': 1099,
				'12': 1137,
				'13': 1178,
			},
			talks: [
				{
					text: 'プログラミングで動画が作れるなんて面白かったわ',
					textForDisplay: 'プログラミングで\n動画が作れるなんて面白かったわ',
					speaker: 'reimu',
					id: 'd2506b5d8d274e34837c6d04d8b632f2',
					audioDurationFrames: 92,
				},
				{
					text: 'ああ、これでリッチな動画がたくさん作れるようになるな',
					textForDisplay:
						'ああ、これでリッチな動画が\nたくさん作れるようになるな',
					speaker: 'marisa',
					id: '88af9e2968d8447dbc4529dda1277b34',
					audioDurationFrames: 102,
				},
				{
					text: 'いろんなサイトで動画が作られることが増えるかもしれないぜ',
					textForDisplay:
						'いろんなサイトで動画が作られることが\n増えるかもしれないぜ',
					speaker: 'marisa',
					id: '263d3631905f4ad09c6bdb609bc2e896',
					audioDurationFrames: 111,
				},
				{
					text: 'それにしても私たちがコードでできてるなんてね、びっくりしたわ',
					textForDisplay:
						'それにしても私たちがコードで\nできてるなんてね、びっくりしたわ',
					speaker: 'reimu',
					id: 'eb8513f2ee1047f885d0462b64b0ad07',
					audioDurationFrames: 116,
				},
				{
					text: 'いきなりアイデンティティーが崩壊しちゃった',
					speaker: 'reimu',
					face: 'nikkori',
					id: '6b729cc2d1204a7f83fde6e0ad077535',
					audioDurationFrames: 64,
				},
				{
					text: 'そうだな',
					speaker: 'marisa',
					id: '66a94c4f11464c64b1f0707b08d50775',
					audioDurationFrames: 17,
				},
				{
					text: 'もしかしたら今これを見ている "あなた" もそうだったりしてな',
					textForDisplay:
						'もしかしたら今これを見ている\n"あなた"もそうだったりしてな',
					speaker: 'marisa',
					id: '00215230c0b748c5b67f3a99eb4822de',
					audioDurationFrames: 114,
				},
				{
					text: '？',
					speaker: 'reimu',
					face: 'komari',
					id: '06da6255f5284c938f92e9c42abababd',
					audioDurationFrames: 0,
					customDuration: 60,
				},
				{
					text: '誰に向かって話しかけてるの？',
					speaker: 'reimu',
					face: 'komari',
					id: '459268b3d5144fafa0ea7f0f850725bf',
					audioDurationFrames: 54,
				},
				{
					text: 'なんでもないぜ',
					speaker: 'marisa',
					id: '082f8bb5ca3f49faa5fe9c6c00282564',
					audioDurationFrames: 26,
				},
				{
					text: 'そろそろこの動画も終わりにしようか',
					speaker: 'marisa',
					id: 'd0b478bdd3f145099c16dd61014c86ee',
					audioDurationFrames: 63,
				},
				{
					text: 'そうね',
					speaker: 'reimu',
					id: '8936500a8a3e45098bded17bb85f75e9',
					audioDurationFrames: 13,
				},
				{
					text: 'それでは',
					speaker: 'marisa',
					id: 'a91fcf5b381947e998cec3e3960fa366',
					audioDurationFrames: 16,
				},
				{
					text: '最後までご視聴いただきありがとうございました!',
					speaker: 'reimuAndMarisa',
					id: '8774bdbeaed14affad4d42f7f1e04a35',
					ids: [
						'a5cebf9a27ad4fe793151302946df389',
						'9608006b55d44515b55d3ae7dda600f7',
					],
					audioDurationFrames: 83,
				},
			],
			totalFrames: 1533,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
			afterMovieFrames: 240,
		},
	],
};
