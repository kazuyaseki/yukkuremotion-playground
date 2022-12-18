import {staticFile} from 'remotion';
import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export const FirstVideoConfig: VideoConfig = {
	sections: [
		{
			title: 'イントロダクション',
			bgmSrc: '/audio/bgm/honobono-wartz.wav',
			backgroundVideo: '/video/codebg.mp4',
			fromFramesMap: {
				'0': 0,
				'1': 56,
				'2': 105,
				'3': 194,
				'4': 274,
				'5': 393,
				'6': 477,
				'7': 652,
				'8': 773,
				'9': 863,
				'10': 951,
				'11': 1022,
				'12': 1188,
				'13': 1218,
				'14': 1390,
			},
			talks: [
				{
					text: 'ねえねえ魔理沙',
					speaker: 'reimu',
					id: '83164c04f6314b9c8e7d8e37e92641d0',
				},
				{
					text: 'なんだ霊夢',
					speaker: 'marisa',
					id: 'fda233854afa4d2b9063ae2f3f7ec5da',
				},
				{
					text: '私たちってめんどくさくない？',
					speaker: 'reimu',
					id: '45eb824d798b454c9e2056b7b9f5914b',
				},
				{
					text: 'なんだ急にメンヘラみたいに',
					speaker: 'marisa',
					id: '6ecacecf0d5a47b38b7b5082960ea8ee',
				},
				{
					text: 'いや私たちってこうやって表情変えたり',
					speaker: 'reimu',
					id: 'ceae60e5c75245cfba7c90d508a45b09',
					face: 'angry',
				},
				{
					text: '口パクや瞬きさせたり',
					speaker: 'reimu',
					id: '6b899cd7eac0455c94f4c695557931d5',
				},
				{
					text: '音声も一文一文音声ファイルを、作ったりしているわけじゃない',
					textForDisplay:
						'音声も一文一文音声ファイルを\n作ったりしているわけじゃない',
					speaker: 'reimu',
					id: '6095ac78a8bf41daa57ae30e62a15525',
					face: 'donbiki',
				},
				{
					text: '作っている人もよくやるなと感心するわ',
					speaker: 'reimu',
					id: 'df7f5bcdc5b44fa0a42b40a12a6206ed',
				},
				{
					text: 'そういうメタ的な話だったか',
					speaker: 'marisa',
					id: '8440b0d9f9cc4b20a5dc77e0743b15f1',
				},
				{
					text: 'それなら簡単な方法があるぜ',
					speaker: 'marisa',
					id: '309e8228fcd84b5392c2346550bdb671',
				},
				{
					text: 'え、教えて教えて',
					speaker: 'reimu',
					id: '504845c066ed493b8fb7076b6582aba3',
				},
				{
					text: '何を隠そう、今喋っている私たちもそれで作られているからな',
					textForDisplay:
						'何を隠そう、今喋っている私たちも\nそれで作られているからな',
					speaker: 'marisa',
					id: '76a6a685a28048b494c6052feec10595',
				},
				{text: 'え', speaker: 'reimu', id: 'd1f08014236042718c194afd6c772af9'},
				{
					text: 'それじゃあプログラミングでゆっくり実況を作る方法を解説していくぜ',
					textForDisplay:
						'それじゃあプログラミングで\nゆっくり実況を作る方法を解説していくぜ',
					speaker: 'marisa',
					id: '6c2f29873df246299d6ada444e256cff',
				},
				{
					text: 'それでは、ゆっくりしていってね！',
					speaker: 'marisa',
					id: 'c76d8eae709e4469a2df4140a54ddb08',
				},
			],
			totalFrames: 1417,
		},
		{
			title: 'Remotion の説明',
			bgmSrc: '/audio/bgm/Stay_On_Your_Mind.mp3',
			backgroundVideo: '/video/codebg.mp4',
			fromFramesMap: {
				'0': 0,
				'1': 116,
				'2': 268,
				'3': 315,
				'4': 504,
				'5': 548,
				'6': 643,
				'7': 709,
				'8': 756,
				'9': 970,
				'10': 1215,
				'11': 1414,
				'12': 1536,
				'13': 1641,
				'14': 1812,
				'15': 1861,
				'16': 2034,
				'17': 2204,
				'18': 2370,
				'19': 2494,
				'20': 2569,
				'21': 2615,
				'22': 2740,
				'23': 2942,
				'24': 3110,
				'25': 3172,
				'26': 3238,
			},
			talks: [
				{
					text: 'プログラミングで作るってどういうことなの？',
					speaker: 'reimu',
					id: 'e60395ab83794b57a25d6333e4af834b',
				},
				{
					text: '今回は Remotion っていう技術を使って作っていくぜ',
					speaker: 'marisa',
					id: 'edcddc1efff448f5aef69a276732f8e4',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'Remotion?',
					speaker: 'reimu',
					id: 'b070d0302ab240309cddc6027c79fdbf',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'Remotion は React っていう技術を使って動画を作れるツールなんだ',
					textForDisplay:
						'Remotion は React っていう技術を\n使って動画を作れるツールなんだ',
					speaker: 'marisa',
					id: '6c95badae8fc42fd978130725f623ef5',
					image: {src: '/image/remotion-logo.png', backgroundColor: '#fff'},
				},
				{
					text: 'React?',
					speaker: 'reimu',
					id: 'c933886efdd742c4ace55f6f4b1143ab',
				},
				{
					text: 'ちょっと知らない単語がいっぱいだわ',
					speaker: 'reimu',
					id: '360d23c168fd40e492e584aec99fae9f',
				},
				{
					text: '順に説明して',
					speaker: 'reimu',
					id: '7b455316fa9b4971a89d48cd1c0152a6',
				},
				{
					text: 'わかったぜ',
					speaker: 'marisa',
					id: '596cd9a895af4f2e847a8222121a84be',
				},
				{
					text: 'React はすごいざっくりいうと Web サイトの見た目の部分を作るための技術だな',
					speaker: 'marisa',
					id: 'f12cfc918d274c10a8279e4a0e70a11f',
				},
				{
					text: 'Web サイトを作るためには HTML や CSS 、JavaScript という技術を使うんだが、',
					speaker: 'marisa',
					id: 'b88bde171d6f4552af86988bca8f3193',
				},
				{
					text: 'React はリッチなサイトを作るときにそれらを便利に扱うための技術なんだ',
					speaker: 'marisa',
					id: '42c85b5f77b94ec89b637041b6f54bd9',
				},
				{
					text: '具体的にはこんな感じで見た目を作れるんだ',
					speaker: 'marisa',
					id: '25bbd84e66ab4ff9baacb0dcffe0bf0e',
				},
				{
					text: 'へえ...それは...便利なの？',
					speaker: 'reimu',
					id: '1b2104cf3c244ea8bc169bac5ab2b06e',
				},
				{
					text: 'まあとりあえず Web サイトの見た目を作れるものと覚えていてくれ',
					speaker: 'marisa',
					id: '192bd4b353094def8085f67fbc1c4857',
				},
				{
					text: 'わかったわ',
					speaker: 'reimu',
					id: '8127c49b26cc47ae890e024242e16210',
				},
				{
					text: 'そして Remotion はこの React で動画が作れるツールなんだ',
					speaker: 'marisa',
					id: '07bf1ceffdbe42acba6c0f0c83528e9e',
				},
				{
					text: 'え、React は Web サイトを作れるものじゃなかったの？',
					speaker: 'reimu',
					id: 'd03f1b73be0346d3a6df36f694a79266',
				},
				{
					text: 'ああ、だからこれが最初に出てきた時はエンジニアたちも驚いてたぜ',
					speaker: 'marisa',
					id: 'e7d6391f68114adba02dc31e980289ae',
				},
				{
					text: 'とりあえず例を見せるとこんな感じのコードを書くと',
					speaker: 'marisa',
					id: '00e64999e6cf47a2a100fd2f5507a942',
				},
				{
					text: 'こういう動画が作れるんだ',
					speaker: 'marisa',
					id: 'ba92b79d6f8447b190fbef04efe0a815',
				},
				{
					text: 'えーすごい！',
					speaker: 'reimu',
					id: 'edd5100fa305491393b525963bac0c31',
				},
				{
					text: 'でもプログラミングで作れると何が嬉しいの？',
					speaker: 'reimu',
					id: '732775877a2d45b29e07aabe50ffeb61',
				},
				{
					text: 'プログラミングで作れるとテキストでちょっといじるだけで色んな動画が作れるようになるから',
					speaker: 'marisa',
					id: 'daa960ab58ba473a8354da70184d3315',
				},
				{
					text: 'ある程度型が決まっているような動画の制作にはかなり向いてるぜ',
					speaker: 'marisa',
					id: 'ee10a95b86f443b6ab592834c220d57a',
				},
				{
					text: '私たちみたいな。',
					speaker: 'marisa',
					id: 'dd754b33fe4c49e5b6555d0cc406ba7f',
				},
				{
					text: '私たちみたいな。',
					speaker: 'reimu',
					id: '1a726f9e27934e1eb380ae927b2b1198',
				},
				{
					text: '逆にクリエイティブな動画にはあまり向いてないだろうな。',
					speaker: 'marisa',
					id: '827a9483ca4c497692a30898d0f19535',
				},
			],
			totalFrames: 3266,
		},
	],
};
