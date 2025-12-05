import { randomSliceColor } from "../../../utils/combination";
import { useGameState } from "../useGameState";

export function useInactivePhase(): () => void {
  const [gameState, setGameState] = useGameState();

  if (gameState.phase == "inactive") {
    return () => {
      //reset the game for playing
      setGameState({
        phase: "display",
        inputCombination: [],
        combination: [randomSliceColor()],
      });
    };
  } else {
    return () => {};
  }
}
