import {Sequence} from 'remotion';
import {zIndex} from '../constants';
import {YukkuriFace} from './Face/YukkuriFace';
import {VoiceConfig} from './yukkuriVideoConfig';

export type Props = {
  talks: VoiceConfig[];
  fromFramesMap: {[key in number]: number};
};

export const YukkuriSequence: React.FC<Props> = () => {
  return (
    <Sequence>
      <div style={reimuStyle}>
        <YukkuriFace isReimu />
      </div>
      <div style={marisaStyle}>
        <YukkuriFace isReimu={false} />
      </div>
    </Sequence>
  );
};

const reimuStyle: React.CSSProperties = {
  position: 'absolute',
  right: '10px',
  bottom: '180px',
  zIndex: zIndex.yukkuri,
};

const marisaStyle: React.CSSProperties = {
  position: 'absolute',
  left: '-5px',
  bottom: '180px',
  zIndex: zIndex.yukkuri,
};
