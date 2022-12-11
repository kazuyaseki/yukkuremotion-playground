import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Composition} from 'remotion';
import {FACE_TYPE} from './ImagePaths/faceImagePaths';
import {Face, YukkuriFace} from './YukkuriFace';

export default {
	title: 'YukkuriFace',
	component: YukkuriFace,
	argTypes: {
		isReimu: {
			type: 'boolean',
			defaultValue: true,
		},
		face: {
			type: 'string',
			defaultValue: 'default',
		},
		sizePx: {
			type: 'number',
			defaultValue: 160,
		},
	},
} as ComponentMeta<typeof YukkuriFace>;

const Template: ComponentStory<typeof YukkuriFace> = (args) => (
	<div>
		<section>
			<h3>単一表示</h3>
			<Face imageDirectory="reimu" {...args} />
		</section>

		<section>
			<h3>ギャラリー: デフォルトの口</h3>
			<div style={gallaryStyle}>
				{labels.map((label) => {
					return (
						<div>
							<h4>{label.label}</h4>
							<button
								type="button"
								onClick={() => {
									navigator.clipboard.writeText(label.type);
								}}
							>
								コピー: {label.type}
							</button>
							<Face imageDirectory="reimu" {...args} face={label.type} />
						</div>
					);
				})}
			</div>
		</section>
	</div>
);

const gallaryStyle: React.CSSProperties = {
	display: 'flex',
	gap: '20px',
	flexWrap: 'wrap',
};

const labels: {type: string; label: string}[] = [
	{type: 'default', label: 'デフォルト'},
	{type: 'nikkori', label: 'にっこり'},
	{type: 'wink', label: 'ウィンク'},
	{type: 'ryomeWink', label: '両目ウィンク'},
	{type: 'mangaNikkori', label: '漫画みたいなにっこり'},
	{type: 'shonbori', label: 'しょんぼり'},
	{type: 'kirakira', label: 'キラキラ目'},
	{type: 'angry', label: '怒り'},
	{type: 'pokan', label: 'ポカーン'},
	{type: 'ryomeNikkori', label: '両目にっこり'},
	{type: 'komari', label: '困り顔'},
	{type: 'komariKatame', label: '片目困り'},
	{type: 'hokkori', label: 'ほっこり'},
	{type: 'karukuhiiteru', label: '軽くヒク'},
	{type: 'zitome', label: 'ジト目'},
	{type: 'ryomeTojiIkari', label: '両目閉じて怒り'},
	{type: 'uruuru', label: 'うるうる'},
	{type: 'namida', label: '涙'},
	{type: 'shorime', label: '白目'},
	{type: 'massao', label: '真っ青'},
	{type: 'huteki', label: '不敵'},
	{type: 'donbiki', label: 'ドン引き'},
	{type: 'saranidonbiki', label: '更にドン引き'},
	{type: 'daradaraAse', label: '汗ダラダラ'},
];

export const Default = Template.bind({});
Default.args = {};

const EyeOnlyTemplate: ComponentStory<typeof YukkuriFace> = (args) => (
	<section>
		<h3>ギャラリー: デフォルトの口</h3>
		<div style={gallaryStyle}>
			{labels.map((label) => {
				return (
					<div>
						<h4>{label.label}</h4>
						<button
							type="button"
							onClick={() => {
								navigator.clipboard.writeText(label.type);
							}}
						>
							コピー: {label.type}
						</button>
						<Face
							imageDirectory="reimu"
							{...args}
							face={label.type}
							mouth="05"
						/>
					</div>
				);
			})}
		</div>
	</section>
);

export const 霊夢の目だけ変更 = EyeOnlyTemplate.bind({});
霊夢の目だけ変更.args = {};

const MarisaEyeOnlyTemplate: ComponentStory<typeof YukkuriFace> = (args) => (
	<section>
		<h3>ギャラリー: デフォルトの口</h3>
		<div style={gallaryStyle}>
			{labels.map((label) => {
				return (
					<div>
						<h4>{label.label}</h4>
						<button
							type="button"
							onClick={() => {
								navigator.clipboard.writeText(label.type);
							}}
						>
							コピー: {label.type}
						</button>
						<Face
							imageDirectory="marisa"
							{...args}
							face={label.type}
							mouth="05"
						/>
					</div>
				);
			})}
		</div>
	</section>
);

export const 魔理沙の目だけ変更 = MarisaEyeOnlyTemplate.bind({});
魔理沙の目だけ変更.args = {};
