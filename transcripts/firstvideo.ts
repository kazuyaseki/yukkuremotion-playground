type VideoConfig = {
	sections: {
		title: string;
		fromFramesMap: {[key in number]: number};
		talks: {text: string; isReimu: boolean; id?: string}[];
	}[];
};

export const FirstVideoConfig: VideoConfig = {
	sections: [
		{
			title: 'イントロダクション',
			fromFramesMap: {
				'0': 0,
				'1': 40,
				'2': 75,
				'3': 147,
				'4': 216,
				'5': 317,
				'6': 384,
				'7': 536,
				'8': 639,
				'9': 718,
				'10': 795,
				'11': 849,
				'12': 1004,
				'13': 1019,
			},
			talks: [
				{
					text: 'ねえねえ魔理沙',
					isReimu: true,
					id: '0b4d57420dcf4b93992bdecd322cf217',
				},
				{
					text: 'なんだ霊夢',
					isReimu: false,
					id: '48bc0f13f3234ca78ebc6f16676e481f',
				},
				{
					text: '私たちってめんどくさくない？',
					isReimu: true,
					id: '448c638cab2e49d0a5e813ddc4068072',
				},
				{
					text: 'なんだ急にメンヘラみたいに',
					isReimu: false,
					id: '8c44b41a6ec34ea58b5b0e6d35dcdcbe',
				},
				{
					text: 'いや私たちってこうやって表情変えたり',
					isReimu: true,
					id: '1ba97572d3c44d22a5bc8926697fc25a',
				},
				{
					text: '口パクや瞬きさせたり',
					isReimu: true,
					id: '8aa686e66bfd42f7a94f185c176b5f60',
				},
				{
					text: '音声も一文一文音声ファイルを作ったりしているわけじゃない',
					isReimu: true,
					id: 'f0a9db84a1ac4607aee22f4d049471fd',
				},
				{
					text: '作っている人もよくやるなと感心するわ',
					isReimu: true,
					id: '1d603a2015ea4356aa8b0e5aba9dd8b2',
				},
				{
					text: 'そういうメタ的な話だったか',
					isReimu: false,
					id: 'bde92ce6f7be46a196b62f46643676a6',
				},
				{
					text: 'それなら簡単な方法があるぜ',
					isReimu: false,
					id: '4383c98f670342db95cf0f3c474e1104',
				},
				{
					text: 'え、教えて教えて',
					isReimu: true,
					id: 'af32d44d35794131b1529e99abc67168',
				},
				{
					text: '何を隠そう今喋っている私たちもそれで作られているからな',
					isReimu: false,
					id: 'cb830b1fe88e4bfaa20eea99b70c6943',
				},
				{text: 'え', isReimu: true, id: 'f74c92eca02648c0bf83b08d09876094'},
				{
					text: 'それじゃあプログラミングで作る方法を解説していくぜ',
					isReimu: false,
					id: '257f85ab37594775a3774ada014f2744',
				},
			],
		},
	],
};
