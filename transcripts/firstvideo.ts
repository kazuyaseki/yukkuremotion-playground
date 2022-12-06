type VideoConfig = {
	sections: {
		title: string;
    fromFramesMap: {[key in number]: number};
		talks: {text: string; isReimu: boolean; id?: string}[];
	}[];
};

export const FirstVideoConfig: VideoConfig = {"sections":[{"title":"イントロダクション","fromFramesMap":{"0":0,"1":40,"2":76,"3":148,"4":217,"5":318,"6":385,"7":537,"8":640,"9":719,"10":796,"11":850,"12":1006,"13":1021},"talks":[{"text":"ねえねえ魔理沙","isReimu":true,"id":"954f1faa3ee541a4a68009239a10837d"},{"text":"なんだ霊夢","isReimu":false,"id":"6122325cded64e40aa7242e4bdbb2aec"},{"text":"私たちってめんどくさくない？","isReimu":true,"id":"6b3cfd4ef0da430f9733f249233f0a3f"},{"text":"なんだ急にメンヘラみたいに","isReimu":false,"id":"bd48dc471615457da21bea0cc8aa4988"},{"text":"いや私たちってこうやって表情変えたり","isReimu":true,"id":"fca1a09fbb1b42599ef87cc3259a872e"},{"text":"口パクや瞬きさせたり","isReimu":true,"id":"5b79a808e49340d8a7be6a7b80d06f83"},{"text":"音声も一文一文音声ファイルを作ったりしているわけじゃない","isReimu":true,"id":"b26e0849432a43eaaa43568aa67c6482"},{"text":"作っている人もよくやるなと感心するわ","isReimu":true,"id":"06da3c602c484abc88a7ad3c01bd8077"},{"text":"そういうメタ的な話だったか","isReimu":false,"id":"c90ee3076e564370b649516b6cc4a3e6"},{"text":"それなら簡単な方法があるぜ","isReimu":false,"id":"7634bde4284e4d38954d92c540afaeeb"},{"text":"え、教えて教えて","isReimu":true,"id":"39754492df9342f3bd5227cc49d0a9a2"},{"text":"何を隠そう今喋っている私たちもそれで作られているからな","isReimu":false,"id":"40eaaea47c104aacbc0639fc5a37f04e"},{"text":"え","isReimu":true,"id":"978b2e24f6c1481994de4ebaaad6d36f"},{"text":"それじゃあプログラミングで作る方法を解説していくぜ","isReimu":false,"id":"8a81cb15346e401b997ef8979fac6d68"}]}]}