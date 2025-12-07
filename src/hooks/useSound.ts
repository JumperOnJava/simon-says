import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { playSound } from "../utils/sound";

export function useSound(sound: string) {
  const soundEnabled = useSelector(
    (store: RootState) => store.siteSettings.sounds
  );
  if (!soundEnabled) {
    return () => {
      console.log("play", sound, soundEnabled);
    };
  } else
    return () => {
      console.log("play", sound, soundEnabled);
      return playSound(sound);
    };
}
