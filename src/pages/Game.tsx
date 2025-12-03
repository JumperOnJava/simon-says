import { useContext, useRef, useState } from "react";
import Pad from "../components/Pad";
import {
  GameContext,
  type LogicGameContext,
  type VisualGameState,
} from "../types/GameState";
import { generateCombination } from "../utils/combination";
import { useFirstRender } from "../hooks/useFirstRender";
import createGameplay from "../gameplay/gameplay";

export default function Game() {
  const [gameState, setVisualGameState] = useState<VisualGameState>({
    activeSlice: null,
    currentLevel: 1,
  });
  const logicRef = useRef<LogicGameContext>({
    combination: generateCombination(10),
    phase: "inactive",
    actions: {
      start: () => {},
      inputColor: () => {},
    },
  });
  const gameContext = {
    logicRef: logicRef,
    visual: gameState,
    setVisual: setVisualGameState,
  };

  if (useFirstRender()) {
    createGameplay(gameContext);
  }

  return (
    <GameContext.Provider value={gameContext}>
      <GameInner />
    </GameContext.Provider>
  );
}

function GameInner() {
  const context = useContext(GameContext);

  return (
    <div className="justify-center align-middle flex flex-col gap-8">
      <button
        onClick={() => {
          context.logicRef.current.actions.start();
        }}
      >
        [Start]
      </button>
      <Pad />
    </div>
  );
}
