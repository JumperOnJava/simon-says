import { useGameState } from "./useGameState";

export function useScore(): number {
  const [state] = useGameState();
  
  return state.score;
}

