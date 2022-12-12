type VideoConfig = {
	sections: {
		title: string;
		fromFramesMap: {[key in number]: number};
		talks: {
			text: string;
			isReimu: boolean;
			id?: string;
			textForDisplay?: string;
		}[];
	}[];
};

export const FirstVideoConfig: VideoConfig = {
	sections: [
		{
			title: 'イントロダクション',
			fromFramesMap: {
				'0': 0,
				'1': 37,
				'2': 71,
				'3': 136,
				'4': 201,
				'5': 292,
				'6': 353,
				'7': 493,
				'8': 586,
				'9': 661,
				'10': 734,
				'11': 784,
				'12': 935,
				'13': 949,
			},
			talks: [
				{
					text: 'ねえねえ魔理沙',
					isReimu: true,
					id: 'fbb714b0cbb14d2c84310f5d9d275581',
				},
				{
					text: 'なんだ霊夢',
					isReimu: false,
					id: '0f973f2bcf3e433aaf9571d9795fc88b',
				},
				{
					text: '私たちってめんどくさくない？',
					isReimu: true,
					id: '4236cb9b1ef94f6eaca1581a3a7b1cab',
				},
				{
					text: 'なんだ急にメンヘラみたいに',
					isReimu: false,
					id: 'ec092b76a88a49949447e56af4c3b4bc',
				},
				{
					text: 'いや私たちってこうやって表情変えたり',
					isReimu: true,
					id: '27afd913b4204539bac96d9c445f0cb8',
					face: 'angry',
				},
				{
					text: '口パクや瞬きさせたり',
					isReimu: true,
					id: 'be93245d5ec1481e8f25824e945c50a9',
				},
				{
					text: '音声も一文一文音声ファイルを、作ったりしているわけじゃない',
					textForDisplay:
						'音声も一文一文音声ファイルを\n作ったりしているわけじゃない',
					isReimu: true,
					id: '3d5a3fa0acca4d209e8adf5ec8dec330',
					face: 'donbiki',
				},
				{
					text: '作っている人もよくやるなと感心するわ',
					isReimu: true,
					id: '1b91880dc06b443d9e1c3c6a1ca4256b',
				},
				{
					text: 'そういうメタ的な話だったか',
					isReimu: false,
					id: '1dae574a2f7148ddab81d746febf3c48',
				},
				{
					text: 'それなら簡単な方法があるぜ',
					isReimu: false,
					id: '6fe1810fa17e430496ea66935da17049',
				},
				{
					text: 'え、教えて教えて',
					isReimu: true,
					id: '63fb9e338edd4203b96b1c4c28ad03cd',
				},
				{
					text: '何を隠そう、今喋っている私たちもそれで作られているからな',
					textForDisplay:
						'何を隠そう、今喋っている私たちも\nそれで作られているからな',
					isReimu: false,
					id: '567e69d0969d4a0a8bb45bac4d668a21',
				},
				{text: 'え', isReimu: true, id: '5145dcdd9c5a43bf81ace63b07cf158e'},
				{
					text: 'それじゃあプログラミングで作る方法を解説していくぜ',
					textForDisplay:
						'それじゃあプログラミングで\nゆっくり実況を作る方法を解説していくぜ',
					isReimu: false,
					id: '4eb7d47192a14f38a1bc5cf7b1748a12',
				},
			],
		},
	],
};
