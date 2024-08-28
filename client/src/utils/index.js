import { usePageStore } from "../store"

export const usePage = () => {
  return usePageStore(s => [s.page, s.setPage]);
}

/**
 * @type {{[id:string]: HTMLAudioElement}}
 */
const audioCache = {};

export const preloadAudio = (audioFile) => {
  if (!audioCache[audioFile]) audioCache[audioFile] = new Audio(audioFile);
  return audioCache[audioFile];
}

export const playAudio = (audioFile) => {
  try {
    const audio = preloadAudio(audioFile);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    return audio;
  }
  catch (e) {
    return playAudio(audioFile);
  }
}