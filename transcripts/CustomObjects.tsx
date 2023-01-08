import {memo} from 'react';
import {interpolate, staticFile, useCurrentFrame} from 'remotion/.';
import {Subtitle} from '../src/Subtitle/Subtitle';

function GunyoGunyo() {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        ...gunyogunyoStyle,
        transform: `translateX(${(frame % 100) - 50}px) translateY(${
          (frame % 600) * 12
        }px) rotate(${(frame % 720) * 30}deg)`,
      }}
    >
      <Subtitle speaker="reimu">アニメーションしちゃうぞ〜〜〜〜〜</Subtitle>
    </div>
  );
}

export const CustomObjects = {
  gunyogunyo: GunyoGunyo,
} as const;

const gunyogunyoStyle: React.CSSProperties = {
  width: '100%',
  height: '240px',
  backgroundImage: `url(${staticFile('image/telop/Cyber_telop2_black.png')})`,
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export type CustomObjectKeys = keyof typeof CustomObjects;
