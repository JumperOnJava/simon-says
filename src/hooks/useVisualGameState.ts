import { useContext } from "react";
import { GameContext, type VisualGameState } from "../types/GameState";

export function useVisualGameState(): [
  VisualGameState,
  React.Dispatch<React.SetStateAction<VisualGameState>>
] {
  const context = useContext(GameContext);
  return [context.visual, context.setVisual];
}
