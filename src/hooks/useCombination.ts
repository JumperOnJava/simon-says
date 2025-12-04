import { useGameState } from "./useGameState";

export function useCombination() {
  const [state] = useGameState();
  return state.combination;
}
