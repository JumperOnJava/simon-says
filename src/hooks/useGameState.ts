import { useContext } from "react";
import { GameContext, type GameState } from "../types/GameState";

export function useGameState(): [
  GameState,
  React.Dispatch<React.SetStateAction<GameState>>
] {
  const context = useContext(GameContext);
  return [context.state, context.setState];
}
