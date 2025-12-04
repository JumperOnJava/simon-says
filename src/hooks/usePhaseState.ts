import type { GamePhase } from "../types/GameState";
import { useGameState } from "./useGameState";

export function usePhaseState(): [GamePhase, (phase: GamePhase) => void] {
  const [state, setGameState] = useGameState();
  function setPhaseFunc(phase: GamePhase) {
    return setGameState((state) => {
      const newState = { ...state, phase: phase };
      return newState;
    });
  }
  return [state.phase, setPhaseFunc];
}
