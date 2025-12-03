import { useVisualGameState } from "./useVisualGameState";

export function useLevel(): number {
  const [state] = useVisualGameState();
  return state.currentLevel;
}

