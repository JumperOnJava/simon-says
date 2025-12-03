import type { SliceColor } from "../types/GameState";
import { useVisualGameState } from "./useVisualGameState";

export function useActiveSlice(): SliceColor | null {
  const [state] = useVisualGameState();
  return state.activeSlice;
}
