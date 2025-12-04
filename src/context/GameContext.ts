import { createContext } from "react";

export const SliceColors = ["lime", "red", "yellow", "blue"];
export type SliceColor = (typeof SliceColors)[number];

export type GamePhase = "inactive" | "display" | "input" | "failed";

export interface GameContext {
  state: GameState;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
}

export interface GameState {
  phase: GamePhase;
  combination: SliceColor[];
  inputCombination: SliceColor[];
}

export const GameContext = createContext<GameContext>({
  state: {
    combination: [],
    inputCombination: [],
    phase: "inactive",
  },
  setState: (() => {}) as React.Dispatch<React.SetStateAction<GameState>>,
});
