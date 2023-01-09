import React from 'react';
import {zIndex} from '../constants';
import {SPEAKER, SPEAKER_TYPE} from '../yukkuri/yukkuriVideoConfig';

const subtitle: React.CSSProperties = {
  fontFamily: 'GenshinGothic',
  fontSize: 64,
  fontWeight: '900',
  lineHeight: 1.28,
  color: '#fff',
  WebkitTextStroke: '4px #C90003',
  textAlign: 'center',
  zIndex: zIndex.anyValue,
};

type Props = {
  speaker: SPEAKER_TYPE;
  children: React.ReactNode;
};

const colorBySpeaker = {
  [SPEAKER.reimu]: '4px #C90003',
  [SPEAKER.marisa]: '4px #D3BB02',
  [SPEAKER.reimuAndMarisa]: '4px #EAF103',
};

export const Subtitle: React.FC<Props> = ({speaker, children}) => {
  return (
    <div style={{position: 'relative'}}>
      {speaker === 'reimuAndMarisa' && (
        <p
          style={{
            ...subtitle,
            WebkitTextStroke: `${colorBySpeaker[SPEAKER.reimu]}`,
            position: 'absolute',
            top: '2px',
            width: '100%',
            left: '-6px',
            zIndex: 0,
          }}
        >
          {children}
        </p>
      )}
      <p style={{...subtitle, WebkitTextStroke: `${colorBySpeaker[speaker]}`}}>
        {children}
      </p>
    </div>
  );
};
