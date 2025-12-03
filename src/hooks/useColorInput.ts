import { useContext } from "react";
import { GameContext, type SliceColor } from "../types/GameState";

export function useColorInput() {
  const logicRef = useContext(GameContext).logicRef;
  return function (color: SliceColor) {
    logicRef.current.actions.inputColor(color);
  };
}
