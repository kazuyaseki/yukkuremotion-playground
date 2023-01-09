import getAudioDurationInSeconds from 'get-audio-duration';
import getVideoDurationInSeconds from 'get-video-duration';
import {
  DEFAULT_SECTION_END_FRAMES,
  DEFAULT_SECTION_INITIAL_DELAY_FRAMES,
  FPS,
  TALK_GAP_FRAMES,
} from '../src/constants';
import {VideoConfig} from '../src/yukkuri/yukkuriVideoConfig';

export async function generateFromFramesMap(videoConfig: VideoConfig) {
  for (const section of videoConfig.sections) {
    const {talks} = section;

    section.fromFramesMap = {};
    let cumulate =
      section.initialDelayFrames || DEFAULT_SECTION_INITIAL_DELAY_FRAMES;

    section.fromFramesMap[0] = cumulate;

    section.beforeMovieFrames = 0;
    if (section.beforeMovie) {
      section.beforeMovieFrames =
        (await getVideoDurationInSeconds(`./public${section.beforeMovie}`)) *
        FPS;
      section.totalFrames += section.beforeMovieFrames;
    }

    for (let i = 1; i < section.talks.length; i++) {
      // ここでは今の Talk 以前の音声ファイルの秒数を取得するため index - 1 を参照している
      const previousTalk = talks[i - 1];
      if (previousTalk.id || previousTalk.ids) {
        const id = previousTalk.ids ? previousTalk.ids[0] : previousTalk.id;
        const durationSec = await getAudioDurationInSeconds(
          `./public/audio/yukkuri/${id}.wav`
        );

        const audioDurationframes = Math.floor((durationSec || 1) * FPS);
        const totalFrames =
          previousTalk.customDuration || audioDurationframes + TALK_GAP_FRAMES;
        cumulate += totalFrames;
        section.fromFramesMap[i] = cumulate;
        section.totalFrames = cumulate;

        if (i === section.talks.length - 1) {
          const currentTalk = talks[i];
          const id = currentTalk.ids ? currentTalk.ids[0] : currentTalk.id;
          const lastAudioDurationSec = await getAudioDurationInSeconds(
            `./public/audio/yukkuri/${id}.wav`
          );
          section.totalFrames +=
            Math.floor(lastAudioDurationSec) * FPS + TALK_GAP_FRAMES;
        }
      }
    }

    section.totalFrames += DEFAULT_SECTION_END_FRAMES;

    if (section.afterMovie) {
      section.afterMovieFrames = Math.ceil(
        (await getVideoDurationInSeconds(`./public${section.afterMovie}`)) * FPS
      );
      section.totalFrames += section.afterMovieFrames;
    }
  }
}
