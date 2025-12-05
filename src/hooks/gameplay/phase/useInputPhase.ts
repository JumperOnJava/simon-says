import { type GameState, type SliceColor } from "../../../context/GameContext";
import {
  generateCombination,
} from "../../../utils/combination";
import { useDifficultySettings } from "../useDifficultySettings";
import { useGameState } from "../useGameState";

export function useInputPhase() {
  const [gameState, setGameState] = useGameState();
  const difficulty = useDifficultySettings();

  if (gameState.phase != "input") {
    return () => {};
  } else
    return function (color: SliceColor) {
      console.log("input color", color);
      setGameState((state: GameState) => {
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
          newState.score = newState.combination.length;

          newState.combination = [
            ...newState.combination,
            ...generateCombination(difficulty.colorsPerRound),
          ];
          newState.inputCombination = [];
          newState.phase = "display";
        }

        return newState;
      });
    };
}
