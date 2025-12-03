import { createContext, type RefObject } from "react";

export const SliceColors = ["lime", "red", "yellow", "blue"];
export type SliceColor = (typeof SliceColors)[number];

export type GamePhase = "inactive" | "display" | "input";

export interface GameContext {
  logicRef: RefObject<LogicGameContext>;
  visual: VisualGameState;
  setVisual: React.Dispatch<React.SetStateAction<VisualGameState>>;
}
export interface LogicGameContext {
  combination: SliceColor[];
  phase: GamePhase;
  actions: {
    start: () => void;
    inputColor: (color: SliceColor) => void;
  };
}

export interface VisualGameState {
  currentLevel: number;
  activeSlice: SliceColor | null;
}

export const GameContext = createContext<GameContext>({
  logicRef: null as unknown as RefObject<LogicGameContext>,
  visual: {
    activeSlice: null,
    currentLevel: 1,
  },
  setVisual: (() => {}) as React.Dispatch<
    React.SetStateAction<VisualGameState>
  >,
});
