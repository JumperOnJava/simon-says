import { generateCombination } from "../../../utils/combination";
import { useDifficultySettings } from "../useDifficultySettings";
import { useGameState } from "../useGameState";
import { usePhaseState } from "../usePhaseState";
import { useScore } from "../useScore";

export function useFailedPhase() {
  const [phase] = usePhaseState();
  const score = useScore();
  const [, setGameState] = useGameState();
  const difficulty = useDifficultySettings();

  if (phase !== "failed")
    return {
      score: null,
      restart: () => {},
    };

  return {
    score: score,
    restart: () => {
      setGameState({
        phase: "inactive",
        score: 0,
        inputCombination: [],
        combination: generateCombination(difficulty.colorsPerRound),
      });
    },
  };
}
