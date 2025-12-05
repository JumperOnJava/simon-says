import { useContext } from "react";
import { GameContext, type GameState } from "../../context/GameContext";

export function useGameState(): [
  GameState,
  React.Dispatch<React.SetStateAction<GameState>>
] {
  const context = useContext(GameContext);
  return [context.state, context.setState];
}
