import { useEffect, useRef, useState } from "react";
import { type SliceColor } from "../types/GameState";
import { usePhaseState } from "./usePhaseState";
import { useCombination } from "./useCombination";

export function useDisplayPhase(): SliceColor | null {
  const [phase, setPhase] = usePhaseState();
  const combination = useCombination();

  const [activeSlice, setActiveSlice] = useState<SliceColor | null>(null);
  const running = useRef(false);

  useEffect(() => {
    if (phase !== "display" || running.current) return;
    running.current = true;
    console.log("useeffect fired");

    let targetTime = 0;
    const timeouts: number[] = [];

    timeouts.push(setTimeout(() => setActiveSlice(null), targetTime));
    targetTime += 500;

    for (let i = 0; i < combination.length; i++) {
      const color = combination[i];

      timeouts.push(setTimeout(() => setActiveSlice(color), targetTime));
      targetTime += 500;

      timeouts.push(setTimeout(() => setActiveSlice(null), targetTime));
      targetTime += 200;
    }

    timeouts.push(
      setTimeout(() => {
        setPhase("input");
        console.log("input phase set from timeout");
        running.current = false;
      }, targetTime)
    );

    return () => {};
  }, [phase, combination, setPhase]);

  return activeSlice;
}
