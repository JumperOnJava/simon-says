import { useEffect, useRef, useState } from "react";
import { type SliceColor } from "../../../context/GameContext";
import { usePhaseState } from "../usePhaseState";
import { useCombination } from "../useCombination";
import { useDifficultySettings } from "../useDifficultySettings";
import { useSound } from "../../useSound";

export function useDisplayPhase(): SliceColor | null {
  const [phase, setPhase] = usePhaseState();
  const combination = useCombination();
  const difficulty = useDifficultySettings();

  const [activeSlice, setActiveSlice] = useState<SliceColor | null>(null);
  const running = useRef(false);

  const colorSounds = {
    lime: useSound("/beep_lime.mp3"),
    red: useSound("/beep_red.mp3"),
    blue: useSound("/beep_blue.mp3"),
    yellow: useSound("/beep_yellow.mp3"),
  } as { [key: SliceColor]: () => void };

  useEffect(() => {
    if (phase !== "display" || running.current) return;
    running.current = true;
    console.log("useeffect fired");

    let targetTime = 0;
    const timeouts: number[] = [];

    const colorTime = difficulty.speed * (3 / 4);
    const inactiveTime = difficulty.speed * (1 / 4);

    timeouts.push(setTimeout(() => setActiveSlice(null), targetTime));
    targetTime += 500;

    for (let i = 0; i < combination.length; i++) {
      const color = combination[i];

      timeouts.push(
        setTimeout(() => {
          colorSounds[color]();
          return setActiveSlice(color);
        }, targetTime)
      );
      targetTime += colorTime;

      timeouts.push(setTimeout(() => setActiveSlice(null), targetTime));
      targetTime += inactiveTime;
    }

    timeouts.push(
      setTimeout(() => {
        setPhase("input");
        console.log("input phase set from timeout");
        running.current = false;
      }, targetTime)
    );

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, combination, setPhase]);

  return activeSlice;
}
