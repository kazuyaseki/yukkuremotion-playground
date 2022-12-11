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
			<h3>ギャラリー</h3>
			<div style={gallaryStyle}>
				{labels.map((label) => {
					return (
						<div>
							<h4>{label.label}</h4>
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
};

const labels: {type: FACE_TYPE; label: string}[] = [
	{type: 'default', label: 'デフォルト'},
	{type: 'nikkori', label: 'にっこり'},
];

export const Default = Template.bind({});
Default.args = {};
