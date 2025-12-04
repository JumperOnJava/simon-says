import { type SliceColor } from "../context/GameContext";
import { generateCombination, randomSliceColor } from "../utils/combination";
import { useGameState } from "./useGameState";

export function useInputPhase() {
  const [gameState, setGameState] = useGameState();

  if (gameState.phase != "input") {
    return () => {};
  } else
    return function (color: SliceColor) {
      console.log("input color", color);
      setGameState((state) => {
        const newState = { ...state };

        newState.inputCombination = [...newState.inputCombination, color];

        const lastIndex = newState.inputCombination.length - 1;

        if (
          newState.inputCombination[lastIndex] !=
          newState.combination[lastIndex]
        ) {
          newState.phase = "failed";
          return newState;
        }

        // when player inputed entire combination - reset it, put new random color and change phase.
        if (newState.combination.length == newState.inputCombination.length) {
          newState.combination = [...newState.combination, randomSliceColor()];
          newState.inputCombination = [];
          newState.phase = "display";
        }

        return newState;
      });
    };
}
