import { usePhaseState } from "../usePhaseState";
import { useScore } from "../useScore";

export function useFailedPhase() {
  const [phase, setPhase] = usePhaseState();
  const score = useScore();

  if (phase !== "failed")
    return {
      score: null,
      restart: () => {},
    };

  return { score: score, restart: () => setPhase("inactive") };
}
