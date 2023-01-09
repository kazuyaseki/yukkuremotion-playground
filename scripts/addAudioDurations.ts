import getAudioDurationInSeconds from 'get-audio-duration';
import {FPS} from '../src/constants';
import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export async function addAudioDurations(videoConfig: VideoConfig) {
  for (const section of videoConfig.sections) {
    const {talks} = section;

    for (let i = 0; i < section.talks.length; i++) {
      const currentTalk = talks[i];
      if (currentTalk.id || currentTalk.ids) {
        const id = currentTalk.ids ? currentTalk.ids[0] : currentTalk.id;
        const durationSec = await getAudioDurationInSeconds(
          `./public/audio/yukkuri/${id}.wav`
        );

        currentTalk.audioDurationFrames = Math.floor((durationSec || 1) * FPS);
      }
    }
  }
}
