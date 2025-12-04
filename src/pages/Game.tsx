import { useState } from "react";
import Pad from "../components/Pad";
import { GameContext, type GameState } from "../types/GameState";
import { generateCombination } from "../utils/combination";
import { useInactivePhase } from "../hooks/useInactivePhase";

export default function Game() {
  const [gameState, setGameState] = useState<GameState>({
    combination: generateCombination(1),
    inputCombination: [],
    phase: "inactive",
  });

  const gameContext = {
    state: gameState,
    setState: setGameState,
  };

  return (
    <GameContext.Provider value={gameContext}>
      <GameInner />
    </GameContext.Provider>
  );
}

function GameInner() {
  const start = useInactivePhase();

  return (
    <div className="justify-center align-middle flex flex-col gap-8">
      <button
        onClick={() => {
          start();
        }}
      >
        [Start]
      </button>
      <Pad />
    </div>
  );
}
