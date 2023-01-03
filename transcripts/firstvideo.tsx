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
					id: 'e6f1e8f7b44048cb856f71d4d585ba2d',
					audioDurationFrames: 29,
				},
				{
					text: 'なんだ霊夢',
					speaker: 'marisa',
					id: '382d2ee624d4404a87688edb3264802c',
					audioDurationFrames: 24,
				},
				{
					text: '私たちってめんどくさくない？',
					speaker: 'reimu',
					id: 'a6539f7e5d3f42e7bbb14c70a931ec0e',
					audioDurationFrames: 60,
				},
				{
					text: 'なんだ急にメンヘラみたいに',
					speaker: 'marisa',
					id: '027c9475e3a54d29b5093f0ead376b14',
					audioDurationFrames: 55,
				},
				{
					text: 'いや私たちってこうやって表情変えたり',
					speaker: 'reimu',
					id: 'ef2a08fbedc74ac29944da08b9323427',
					face: 'saranidonbiki',
					audioDurationFrames: 88,
				},
				{
					text: '口パクや瞬きさせたり',
					speaker: 'reimu',
					id: '317e1619abc14c828084aeec8cc5c75e',
					audioDurationFrames: 55,
				},
				{
					text: '音声も一文一文音声ファイルを、作ったりしているわけじゃない',
					textForDisplay:
						'音声も一文一文音声ファイルを\n作ったりしているわけじゃない',
					speaker: 'reimu',
					id: '1ac74953c10c4f90a02fc4969232f990',
					audioDurationFrames: 141,
				},
				{
					text: '作っている人もよくやるなと感心するわ',
					speaker: 'reimu',
					id: '4f72584c044a41c998f35f938b32ea40',
					face: 'shonbori',
					audioDurationFrames: 90,
				},
				{
					text: 'そういうメタ的な話だったか',
					speaker: 'marisa',
					id: 'a1056d27e77b42dc827cbf456476bbab',
					audioDurationFrames: 65,
				},
				{
					text: 'それなら簡単な方法があるぜ',
					speaker: 'marisa',
					id: 'c7d657b7629f45f183c10db43f0c2d6c',
					audioDurationFrames: 63,
				},
				{
					text: 'え、教えて教えて',
					speaker: 'reimu',
					id: 'f24b8f5a75c8488c9a9e7d1c32ed7818',
					face: 'kirakira',
					audioDurationFrames: 43,
				},
				{
					text: '何を隠そう、今喋っている私たちもそれで作られているからな',
					textForDisplay:
						'何を隠そう、今喋っている私たちも\nそれで作られているからな',
					speaker: 'marisa',
					id: '497cb0349c404c78a296b5336047bfc5',
					audioDurationFrames: 141,
				},
				{
					text: 'え',
					speaker: 'reimu',
					id: 'c8b763ffa32a4082a769c53aaec209c4',
					audioDurationFrames: 5,
				},
				{
					text: 'それじゃあプログラミングでゆっくり実況を作る方法を解説していくぜ',
					textForDisplay:
						'それじゃあプログラミングで\nゆっくり実況を作る方法を解説していくぜ',
					speaker: 'marisa',
					id: '960d98604921486babc2ea5ba9970047',
					audioDurationFrames: 147,
				},
				{
					text: 'それでは',
					speaker: 'marisa',
					id: 'd170690ad81d49d7817a8214593ed200',
					audioDurationFrames: 18,
				},
				{
					text: 'ゆっくりしていってね！',
					speaker: 'reimuAndMarisa',
					id: '71bb20ffb3e64af8a77306dbbe78ea42',
					audioDurationFrames: 40,
					ids: [
						'9e6a8b03bd7046dcaf7dec0eaf1b6a4e',
						'9e3a93e5d1e348f1bc109974bc0e87bd',
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
					id: 'c84f03594c0e4045bf38f227001f6ba9',
					audioDurationFrames: 86,
				},
				{
					text: '今回はRemotionっていう技術を使って作っていくぜ',
					textForDisplay: '今回は Remotion っていう\n技術を使って作っていくぜ',
					speaker: 'marisa',
					id: '9e1bb6090f39476e90c819dae6735aa1',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 117,
				},
				{
					text: 'Remotion?',
					face: 'komari',
					speaker: 'reimu',
					id: 'c839c0d4d47b45efb14455eb988d363e',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 20,
				},
				{
					text: 'Remotionはリアクトっていう技術を使って動画を作れるツールなんだ',
					textForDisplay:
						'RemotionはReactっていう技術を\n使って動画を作れるツールなんだ',
					speaker: 'marisa',
					id: '50cdaabdab414fb9b3ed08017b4cd094',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
					audioDurationFrames: 139,
				},
				{
					text: 'React?',
					face: 'komari',
					speaker: 'reimu',
					id: 'c3b61eb9936f49f2b593cd8674171f2b',
					audioDurationFrames: 18,
				},
				{
					text: 'ちょっと知らない単語がいっぱいだわ',
					speaker: 'reimu',
					id: '036867eb15e0424692d533a9d2672b19',
					audioDurationFrames: 66,
				},
				{
					text: '順に説明して',
					speaker: 'reimu',
					id: '84c715439fbe4ab2b1cc569e76631765',
					audioDurationFrames: 38,
				},
				{
					text: 'わかったぜ',
					speaker: 'marisa',
					id: 'cc80f74acb0b442e8639690aa26ea482',
					audioDurationFrames: 22,
				},
				{
					text: 'リアクトはすごいざっくりいうとウェブサイトの見た目の部分を作るための技術だな',
					textForDisplay:
						'Reactはすごいざっくりいうと\nWebサイトの見た目の部分を作るための技術だな',
					speaker: 'marisa',
					id: '3b1f99f29fdb4868b5a6fa48536f431d',
					image: {src: '/image/react-logo.png'},
					audioDurationFrames: 159,
				},
				{
					text: 'ウェブサイトを作るためにはHTMLやCSS、ジャバスクリプトという技術を使うんだが、',
					textForDisplay:
						'Web サイトを作るためには HTML や CSS\nJavaScript という技術を使うんだが、',
					speaker: 'marisa',
					id: 'aecbd34de56e4bd6b69c9b0471916846',
					image: {src: '/image/html_css_javascript.jpeg'},
					audioDurationFrames: 189,
				},
				{
					text: 'リアクトはリッチなサイトを作るときにそれらを便利に扱うための技術なんだ',
					textForDisplay:
						'React はリッチなサイトを作るときに\nそれらを便利に扱うための技術なんだ',
					speaker: 'marisa',
					id: 'ec4c9fdd0a6e4b4eaa723ee296015c74',
					image: {src: '/image/html_css_javascript.jpeg'},
					audioDurationFrames: 164,
				},
				{
					text: '私たちの顔もこんな感じで見た目を作ってるぞ',
					speaker: 'marisa',
					id: 'bfc9c6c4af564ef78c51979f5b7cbdba',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 104,
				},
				{
					text: 'これが私たちの顔...!',
					speaker: 'reimu',
					id: '10a38c8de3144025a14767494d9a0554',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 45,
				},
				{
					text: '...これは...便利なの？',
					speaker: 'reimu',
					id: 'ef0b8fa73136458d8267474b06f8908c',
					image: {src: '/image/react-face-sample.png'},
					audioDurationFrames: 65,
				},
				{
					text: 'まあとりあえずウェブサイトの見た目を作れるものと覚えていてくれ',
					textForDisplay:
						'まあとりあえずWebサイトの見た目を\n作れるものと覚えていてくれ',
					speaker: 'marisa',
					id: '73c990eb1f844bf087c139e021500267',
					audioDurationFrames: 131,
				},
				{
					text: 'わかったわ',
					speaker: 'reimu',
					id: 'd55515c29e294f31aee11e0428a0f385',
					audioDurationFrames: 23,
				},
				{
					text: 'そしてRemotionはこのリアクトで動画が作れるツールなんだ',
					textForDisplay:
						'そして Remotion はこの React で\n動画が作れるツールなんだ',
					speaker: 'marisa',
					id: '9de2c2be5a73475587bc5fef7e0a2ccb',
					audioDurationFrames: 123,
					memoForEditor: 'Remotionの動画',
				},
				{
					text: 'え、リアクトはウェブサイトを作れるものじゃなかったの？',
					textForDisplay: 'え、ReactはWebサイトを作れるものじゃなかったの？',
					speaker: 'reimu',
					id: '00b7885b8ea84e50b484a0bebc7ea02c',
					audioDurationFrames: 106,
					memoForEditor: 'Remotionの動画',
				},
				{
					text: 'ああ、だからこれが最初に出てきた時はエンジニアたちも驚いてたぜ',
					textForDisplay:
						'ああ、だからこれが最初に出てきた時は\nエンジニアたちも驚いてたぜ',
					speaker: 'marisa',
					id: '5b0f0b87471f40c59d7115010f285ed5',
					audioDurationFrames: 141,
					memoForEditor: 'Remotionの動画',
				},
				{
					text: 'とりあえず例を見せるとこんな感じのコードを書くと',
					textForDisplay: 'とりあえず例を見せると\nこんな感じのコードを書くと',
					speaker: 'marisa',
					id: '1166f334c6e04428b7a9cbbfbb1c4252',
					audioDurationFrames: 99,
					memoForEditor: 'Remotionのサンプルコードの画像',
				},
				{
					text: 'こういう動画が作れるんだ',
					speaker: 'marisa',
					id: '1b69c1132a5741debad13fae99c27492',
					audioDurationFrames: 50,
					memoForEditor: 'Remotionその動画、次のフレームまで再生したいかも',
				},
				{
					text: 'えーすごい！',
					face: 'kirakira',
					speaker: 'reimu',
					id: '8deefc0428ca4d5ca3b087eefff1787c',
					audioDurationFrames: 19,
				},
				{
					text: 'こんなただのテキストが動画になるなんてなんだか不思議だわ',
					textForDisplay:
						'こんなただのテキストが\n動画になるなんてなんだか不思議だわ',
					speaker: 'reimu',
					id: '6d15a67c85d8403095217957a5570c97',
					audioDurationFrames: 118,
					memoForEditor: 'Remotionのサンプルコードの画像',
				},
				{
					text: 'だろ',
					speaker: 'marisa',
					id: '9fbc7353aa234b768a157fdb2c1077a0',
					audioDurationFrames: 11,
				},
				{
					text: '...',
					speaker: 'reimu',
					customDuration: 120,
					id: '418d033f3a0e45099314fd962fb59c94',
					audioDurationFrames: 0,
				},
				{
					text: 'そういえば私たちもこれで作られてるって言ってたけど',
					textForDisplay:
						'そういえば私たちも\nこれで作られてるって言ってたけど',
					speaker: 'reimu',
					id: '7891a8322b5f4552bb0b95453041cc9e',
					audioDurationFrames: 117,
				},
				{
					text: 'それはどんな風に作られているのかしら？',
					face: 'komari',
					speaker: 'reimu',
					id: '550e77f18f624fb08eb2de3cfff3e15c',
					audioDurationFrames: 79,
				},
				{
					text: '次はそれについて話していこうか',
					speaker: 'marisa',
					id: '5d205539071e4fd9b7411bbd2209dce9',
					audioDurationFrames: 66,
				},
				{
					text: '楽しみだわ！',
					face: 'nikkori',
					speaker: 'reimu',
					id: '7607a3be0bb64fb5b519b3e38b4ca165',
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
			bgmSrc: '/audio/bgm/honobono-wartz.wav',
			backgroundVideo: '/video/editing-code.mp4',
			showBgVideoOverlay: true,
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
					id: 'e3a507d2df0445a1a2e4bba073ca6951',
					audioDurationFrames: 122,
				},
				{
					text: 'ワクワク',
					face: 'ryomeNikkori',
					speaker: 'reimu',
					id: 'b56180c8c1534ed9aca195d2ee07f855',
					audioDurationFrames: 20,
				},
				{
					text: 'まずは字幕だな',
					speaker: 'marisa',
					id: '47182640ab2047ecb9155b79d5da069e',
					audioDurationFrames: 35,
				},
				{
					text: '字幕はすごいシンプルでテキストを書いてCSSで見た目を変えるだけだぜ',
					textForDisplay:
						'字幕はすごいシンプルでテキストを書いて\nCSSで見た目を変えるだけだぜ',
					speaker: 'marisa',
					id: 'ee62a254d7e14a7ea994f598eb9cc7ac',
					audioDurationFrames: 148,
				},
				{
					text: 'こんな感じだな',
					speaker: 'marisa',
					id: 'defb4def29934fb5a0e34b71a2fbdee7',
					image: {src: '/image/jimaku-code.png'},
					audioDurationFrames: 33,
				},
				{
					text: 'とてもシンプルね。',
					speaker: 'reimu',
					id: '5be586dc15f741abacf8999966b98409',
					image: {src: '/image/jimaku-code.png'},
					audioDurationFrames: 35,
				},
				{
					text: 'こういう感じでアニメーションさせることもできるぜ',
					speaker: 'marisa',
					id: '9024482f5b4d4357beba6fe5788ecb09',
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
					id: 'a80316b7c663466e9cb60cd9078e6e0b',
					customObjectKey: 'gunyogunyo',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 38,
				},
				{
					text: 'ここはウェブサイトを作るのとほとんど感覚変わらないな',
					textForDisplay: 'ここはWebサイトを作るのと\nほとんど感覚変わらないな',
					speaker: 'marisa',
					id: '554d7609f272445193fbd045e993bed2',
					image: {src: '/image/css-animation-sample.png'},
					audioDurationFrames: 116,
				},
				{
					text: 'ちなみに今喋っている私たちだが、',
					speaker: 'marisa',
					id: '3694c20abd564bee9c9a2c1498fbbd9f',
					audioDurationFrames: 73,
				},
				{
					text: 'こんな感じの設定ファイルに記述しているぜ',
					speaker: 'marisa',
					id: '96a65fc6929b49178ed774224516362d',
					customDuration: 120,
					image: {src: '/image/setting-file.png'},
					audioDurationFrames: 93,
				},
				{
					text: 'つまりこんな感じで書けば',
					speaker: 'marisa',
					id: '5d1c25cb897a4cad99d0784ef34ca546',
					image: {src: '/image/reimu-talking-setting.png'},
					audioDurationFrames: 51,
				},
				{
					text: '猫ちゃん好き好き好き好き好き好き好き好き好き好き',
					speaker: 'reimu',
					face: 'mangaNikkori',
					id: 'e49e0302f5b34568b6809b591deef2fd',
					image: {src: '/image/reimu-talking-setting.png'},
					audioDurationFrames: 103,
				},
				{
					text: 'みたいに霊夢に発言させることも可能だ',
					speaker: 'marisa',
					id: 'ff470375e593423a86aedad29cb385b6',
					audioDurationFrames: 92,
				},
				{
					text: 'はっ...私は一体今何を',
					speaker: 'reimu',
					id: '9dfcc4ee0971499eb318b4dbf76bd3c1',
					audioDurationFrames: 78,
				},
				{
					text: '次に音声の流し方だが、',
					speaker: 'marisa',
					id: 'fafd643f9aa14a9fbe95fe8287473781',
					audioDurationFrames: 58,
				},
				{
					text: 'オーディオというものがあるからこれで音声ファイルのパスを指定するだけだな',
					textForDisplay:
						'Audioというものがあるからこれで\n音声ファイルのパスを指定するだけだな',
					speaker: 'marisa',
					id: '329b627222a14e12a08b5ce29f8bf7f8',
					image: {src: '/image/audio-code-sample.png'},
					audioDurationFrames: 142,
				},
				{
					text: '例えばこんな感じだ',
					speaker: 'marisa',
					id: 'ad1e50be2e0f4519a315731553e69136',
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
					id: '200840554ab14f128c51a05f84fcd40e',
					audioDurationFrames: 80,
				},
				{
					text: '作者だ。',
					speaker: 'marisa',
					id: '6a2a950572f141b5bb839c5a14f71312',
					audioDurationFrames: 20,
				},
				{
					text: '作者？',
					speaker: 'reimu',
					face: 'komariKatame',
					id: '9774b72aa7de474395784536e1e8fabd',
					audioDurationFrames: 17,
				},
				{
					text: 'お次は動画を表示してみるぜ',
					speaker: 'marisa',
					id: '843b5c170fa74cb79e875028276559f5',
					audioDurationFrames: 58,
				},
				{
					text: 'ちょっと...',
					speaker: 'reimu',
					id: '5377765a016a492a8a24fcb9831d8cb9',
					audioDurationFrames: 16,
				},
				{
					text: 'と言っても動画もほぼ一緒だ。',
					speaker: 'marisa',
					id: 'dc1aa51aae9b414291c408c1a353c2be',
					image: {src: '/image/video-code-sample.png'},
					audioDurationFrames: 56,
				},
				{
					text: 'ビデオと言うものがあるからこれに動画ファイルのパスを指定するだけだぜ',
					textForDisplay:
						'Videoというものがあるから\nこれに動画ファイルのパスを指定するだけだぜ',
					speaker: 'marisa',
					id: 'fb5bbfb5bc684615862fd2b8c17c5114',
					image: {src: '/image/video-code-sample.png'},
					audioDurationFrames: 139,
					memoForEditor: '何かしら動画を載せる',
				},
				{
					text: 'あらかわいい',
					speaker: 'reimu',
					id: '7b195b84688e484a834fb1054c7abdf1',
					audioDurationFrames: 22,
				},
				{
					text: '作者が最近飼い始めた猫のルイ君だな',
					speaker: 'marisa',
					id: 'c41e11d6e30d4a36937bfaeba0adebc9',
					audioDurationFrames: 94,
				},
				{
					text: '作者...一体誰なの...',
					speaker: 'reimu',
					id: '1111e55d27af4335aefbb60add966a7b',
					audioDurationFrames: 62,
				},
			],
			totalFrames: 2791,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
		},
		{
			title: 'プログラミングで動画が作れると何が嬉しいか',
			bgmSrc: '/audio/bgm/honobono-wartz.wav',
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
				'26': 3824,
				'27': 4092,
				'28': 4171,
				'29': 4336,
				'30': 4534,
				'31': 4711,
				'32': 4917,
			},
			talks: [
				{
					text: 'ところでなんだけど',
					speaker: 'reimu',
					id: 'b39d38edf542419a87a8eab3a996a8ca',
					audioDurationFrames: 37,
				},
				{
					text: 'プログラミングで動画が作れると何が嬉しいのかしら？',
					textForDisplay:
						'プログラミングで動画が\n作れると何が嬉しいのかしら？',
					speaker: 'reimu',
					id: '2e71758a696e4122b495e6a6e61e2e96',
					audioDurationFrames: 112,
				},
				{
					text: 'だって世の中には高性能な動画制作ツールがたくさんあるじゃない？',
					textForDisplay:
						'だって世の中には高性能な\n動画制作ツールがたくさんあるじゃない？',
					speaker: 'reimu',
					id: 'c3d9729caa6c456381cdc967af7f8d2c',
					audioDurationFrames: 147,
				},
				{
					text: 'いい質問だな',
					speaker: 'marisa',
					id: '2b489241975747c69b2834271ca27539',
					audioDurationFrames: 30,
				},
				{
					text: 'メリットはいくつかあるぜ',
					speaker: 'marisa',
					id: '5a9238412a1848328de97eb54a2226b1',
					audioDurationFrames: 46,
				},
				{
					text: '一つに同じ内容で少しコンテンツを差し替えた動画をたくさん作りたい場合に有効だ',
					textForDisplay:
						'一つに同じ内容で少しコンテンツを\n差し替えた動画をたくさん作りたい場合に有効だ',
					speaker: 'marisa',
					id: '501fa453341148949cef5874a51cdba0',
					audioDurationFrames: 186,
					memoForEditor: 'なんかいい感じの画像作る',
				},
				{
					text: 'そんなことあるかしら？',
					speaker: 'reimu',
					face: 'komariKatame',
					id: '2850087cd0094b2fbcc65a3ede5262e0',
					audioDurationFrames: 42,
					memoForEditor: '上記の画像使う',
				},
				{
					text: '例としてギットハブアンラップドというものがあるぜ',
					textForDisplay: '例として GitHubUnwrapped というものがあるぜ',
					speaker: 'marisa',
					id: '6b440443efab4cb28850fdbbbbdfc5a8',
					audioDurationFrames: 96,
				},
				{
					text: 'これはギットハブという設計図共有サイトで一年のまとめを動画にしたものだな',
					textForDisplay:
						'これはGitHubという設計図共有サイトで\n一年のまとめを動画にしたものだな',
					speaker: 'marisa',
					id: '07fd6d0596914b6eb1f59ad1c0c44ca0',
					audioDurationFrames: 178,
					memoForEditor: 'GitHubUnrapped のスクショ',
				},
				{
					text: 'ユーザのデータ毎に違う動画が動的に作れるんだ',
					speaker: 'marisa',
					id: 'f10b9053f3e24bea835bf2702a82edee',
					audioDurationFrames: 107,
					memoForEditor: 'GitHubUnrapped のスクショ',
				},
				{
					text: 'ユーザ毎に違う動画...!それは確かにプログラミングじゃないと難しそうね',
					textForDisplay:
						'ユーザ毎に違う動画...!\nそれは確かにプログラミングじゃないと難しそうね',
					face: 'ryomeWink',
					speaker: 'reimu',
					id: 'aa0ffa063de64f0485eb4569bf815b13',
					audioDurationFrames: 171,
					memoForEditor: 'GitHubUnrapped のスクショ',
				},
				{
					text: 'あとは複数の言語に対応する時だな',
					speaker: 'marisa',
					id: '341c37714785452c956a4aca4903c926',
					audioDurationFrames: 87,
					memoForEditor: 'i18nっぽい画像作る',
				},
				{
					text: 'なるほど！それはビジネスとかに便利そうね！',
					speaker: 'reimu',
					id: '1e9b0e32c9534b7783747e325a005bb1',
					audioDurationFrames: 90,
					memoForEditor: 'i18nっぽい画像作る',
				},
				{
					text: 'この動画も設定ファイルの日本語を英語に翻訳するだけで英語版動画が完成するぜ',
					textForDisplay:
						'この動画も設定ファイルの日本語を\n英語に翻訳するだけで英語版動画が完成するぜ',
					speaker: 'marisa',
					id: '18b370be313b4422bc43cebb566663a6',
					audioDurationFrames: 186,
					memoForEditor: 'i18nっぽい画像作る',
				},
				{
					text: 'まあ私たちは英語が喋れないから他の人工音声ツールを使った方がいいけどな',
					textForDisplay:
						'まあ私たちは英語が喋れないから\n他の人工音声ツールを使った方がいいけどな',
					speaker: 'marisa',
					id: '663afe41d422453f864796e543d60f29',
					audioDurationFrames: 175,
					memoForEditor: 'i18nっぽい画像作る',
				},
				{
					text: 'Our English is super horrible',
					speaker: 'reimu',
					id: '7fa654e351014144867f2a9c74377ec7',
					audioDurationFrames: 122,
					memoForEditor: 'i18nっぽい画像作る',
				},
				{
					text: 'その他にもプログラミングで作れると色々自由度高く繋げられるのが便利だな',
					textForDisplay:
						'その他にもプログラミングで作れると\n色々自由度高く繋げられるのが便利だな',
					speaker: 'marisa',
					id: 'b0f4584e754f4dac867e04475641b30f',
					audioDurationFrames: 165,
					memoForEditor: 'プログラミングっぽい画像',
				},
				{
					text: '例えば今回の動画もこういう文字列から音声も生成しつつ動画も生成している訳だが',
					textForDisplay:
						'例えば今回の動画もこういう文字列から\n音声も生成しつつ動画も生成している訳だが',
					speaker: 'marisa',
					id: '767f896622ee48db8c34180d652c7dbd',
					audioDurationFrames: 200,
					memoForEditor: 'プログラミングっぽい画像',
				},
				{
					text: '音声ライブラリや外部エーピーアイと繋げられたりして便利だったぜ',
					textForDisplay:
						'音声ライブラリや外部APIと\n繋げられたりして便利だったぜ',
					speaker: 'marisa',
					id: 'bceb2a4e7ad64734816aaca2d32f5594',
					audioDurationFrames: 136,
					memoForEditor: 'プログラミングっぽい画像',
				},
				{
					text: 'なるほど！何言っているのか分からないけどとりあえず便利なのね！',
					textForDisplay:
						'なるほど！何言っているのか\n分からないけどとりあえず便利なのね！',
					speaker: 'reimu',
					face: 'kirakira',
					id: '5d6fd6083b90436db8c252d26e2eef35',
					audioDurationFrames: 134,
				},
				{
					text: 'あとこれはエンジニアとして思ったことなんだが、',
					speaker: 'marisa',
					id: 'cfe54ae7c57c4603a9119f71066836eb',
					audioDurationFrames: 88,
				},
				{
					text: '動画制作ツールを一から学ぶよりはこのプログラミングで作れる方が遥かに簡単だったぜ',
					textForDisplay:
						'動画制作ツールを一から学ぶよりは\nこのプログラミングで作れる方が遥かに簡単だったぜ',
					speaker: 'marisa',
					id: '8cbcec312e114a2eb7741f6931d13984',
					audioDurationFrames: 202,
					memoForEditor: '各種動画を色々並べた画像',
				},
				{
					text: 'だからエンジニアには自信を持ってオススメできるな',
					speaker: 'marisa',
					id: 'b593d6b308bc43c4a123b16ea112cd59',
					audioDurationFrames: 99,
					memoForEditor: '各種動画を色々並べた画像',
				},
				{
					text: 'へー',
					speaker: 'reimu',
					id: '7b5edc564f754769b6ea1c5d4972825a',
					audioDurationFrames: 10,
				},
				{
					text: 'こう聞くといいことばかりな気がするけど逆に欠点はないの',
					textForDisplay:
						'こう聞くといいことばかりな\n気がするけど逆に欠点はないの',
					speaker: 'reimu',
					id: '3af54e151d0346f5ba573da446a22e7f',
					audioDurationFrames: 128,
				},
				{
					text: 'さっき言ったことの裏返しになるが、プログラミング未経験者にはオススメしづらいな',
					textForDisplay:
						'さっき言ったことの裏返しになるが\nプログラミング未経験者にはオススメしづらいな',
					speaker: 'marisa',
					id: '1247d64d49df4c39b7236835d9be7d7e',
					audioDurationFrames: 170,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'おそらく動画制作ツールの使い方を学ぶより、プログラミングを一から学ぶ方がきっとハードル高いだろうからな',
					textForDisplay:
						'おそらく動画制作ツールの使い方を学ぶより\nプログラミングを一から学ぶ方がきっとハードル高いだろうからな',
					speaker: 'marisa',
					id: '92163d58268e49a29da3791a01e4e22f',
					audioDurationFrames: 243,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'まあ...それはそうよね',
					speaker: 'reimu',
					face: 'komariKatame',
					id: '145e752b8751450ea692c25ea6341d4f',
					audioDurationFrames: 54,
				},
				{
					text: 'あとはトランジションやエフェクトなどはやはり動画制作ツールに負けるな',
					textForDisplay:
						'あとはトランジションやエフェクトなどは\nやはり動画制作ツールに負けるな',
					speaker: 'marisa',
					id: '6db97f29203e46e085cb019a712385f5',
					audioDurationFrames: 140,
					memoForEditor:
						'各種動画を色々並べた画像。エフェクトの動画とか作ってもいいかも',
				},
				{
					text: 'Remotionの場合全部自作したりライブラリを探す必要があるからちょっと大変だぜ',
					textForDisplay:
						'Remotionの場合全部自作したり\nライブラリを探す必要があるからちょっと大変だぜ',
					speaker: 'marisa',
					id: '5f3d8e573a5b490993025de38d0098c3',
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
					id: '7c891955298146978eb8e4eacefa10a7',
					audioDurationFrames: 152,
				},
				{
					text: 'まあでもゆっくり実況くらいなら許されると思うからそういう意味でも向いてると思うぜ',
					textForDisplay:
						'まあでもゆっくり実況くらいなら許されると\n思うからそういう意味でも向いてると思うぜ',
					speaker: 'marisa',
					id: 'e00518c48f0748dbb09ffb3f6c1b7abb',
					audioDurationFrames: 181,
				},
				{
					text: 'この素朴さが有利に働くなんてすごいわね私たち！',
					speaker: 'reimu',
					face: 'nikkori',
					id: '5391baa742e447b39a444b506613f39c',
					audioDurationFrames: 115,
				},
			],
			totalFrames: 5062,
			kuchipakuMap: {frames: [], amplitude: []},
			beforeMovieFrames: 0,
			reimuKuchipakuMap: {frames: [0], amplitude: [6]},
			marisaKuchipakuMap: {frames: [0], amplitude: [5]},
		},
		{
			title: 'Remotion でゆっくり',
			bgmSrc: '/audio/bgm/honobono-wartz.wav',
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
					id: '8d1868a6e5f64ec08c9447d58dc3c54f',
					audioDurationFrames: 106,
				},
				{
					text: 'ああ、これでリッチな動画がたくさん作れるようになるな',
					speaker: 'marisa',
					id: '4796b57af3af4f939c88286f34d2793a',
					audioDurationFrames: 111,
				},
				{
					text: 'いろんなサイトで動画が作られることが増えるかもしれないぜ',
					textForDisplay:
						'いろんなサイトで動画が作られることが\n増えるかもしれないぜ',
					speaker: 'marisa',
					id: '1cf518e2a0844be4bbd46d9c5e55907e',
					audioDurationFrames: 120,
				},
				{
					text: 'それにしても私たちがコードでできてるなんてね、びっくりしたわ',
					textForDisplay:
						'それにしても私たちがコードでできてるなんてね\nびっくりしたわ',
					speaker: 'reimu',
					id: '638b7466c7b44c65ba4515fd1c5f1d06',
					audioDurationFrames: 135,
				},
				{
					text: 'いきなりアイデンティティが崩壊しちゃった',
					speaker: 'reimu',
					face: 'komariKatame',
					id: 'b4c0808431c8466b86340b886b3f9f5d',
					audioDurationFrames: 71,
				},
				{
					text: 'そうだな',
					speaker: 'marisa',
					id: '1c47c4827a8c4ed5a7b3532d40753f0c',
					audioDurationFrames: 18,
				},
				{
					text: 'もしかしたら今これを見ている "あなた" もそうだったりしてな',
					textForDisplay:
						'もしかしたら今これを見ている\n"あなた"もそうだったりしてな',
					speaker: 'marisa',
					id: 'ab513aa9d8e9439a96ead8bb55b141f4',
					audioDurationFrames: 124,
				},
				{
					text: '？',
					speaker: 'reimu',
					face: 'komariKatame',
					id: '73b679c560534674a83e7e2725076e42',
					audioDurationFrames: 0,
				},
				{
					text: '誰に向かって話しかけてるの？',
					speaker: 'reimu',
					face: 'komariKatame',
					id: '6a62e580276741748823fb6fab29c28a',
					audioDurationFrames: 62,
				},
				{
					text: 'なんでもないぜ',
					speaker: 'marisa',
					id: 'abec0f1be6d24806894e19a359fc4bb5',
					audioDurationFrames: 28,
				},
				{
					text: 'そろそろこの動画も終わりにしようか',
					speaker: 'marisa',
					id: 'f8952e2bbfda49b1987b5af5d63f59f4',
					audioDurationFrames: 68,
				},
				{
					text: 'そうね',
					speaker: 'reimu',
					id: '788b9765455d4d35b33f4fae4bfc35dd',
					audioDurationFrames: 15,
				},
				{
					text: 'それでは',
					speaker: 'marisa',
					id: 'd8594076e47e46108012e2bd4a0d1a61',
					audioDurationFrames: 18,
				},
				{
					text: '最後までご視聴いただきありがとうございました!',
					speaker: 'reimuAndMarisa',
					id: '8774bdbeaed14affad4d42f7f1e04a35',
					ids: [
						'38cd7846ea294ba3b8c5002717f24c05',
						'7ef0fbf981dd4c679692dcaef2c35f92',
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
