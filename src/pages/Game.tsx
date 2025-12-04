import { useState } from "react";
import Pad from "../components/Pad";
import { GameContext, type GameState } from "../context/GameContext";
import { generateCombination } from "../utils/combination";
import { useInactivePhase } from "../hooks/useInactivePhase";
import { useBasicNavigation } from "../context/PageContext";
import Button from "../components/Button";

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

  const navigation = useBasicNavigation();
  if (gameState.phase == "failed") {
    //temporary solution
    localStorage.setItem(
      "score",
      (gameState.combination.length - 1).toString()
    );
    navigation.setPage("result");
  }
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
      <div className="flex justify-center text-2xl">
        <Button
          click={() => {
            start();
          }}
        >
          Start
        </Button>
      </div>
      <Pad />
    </div>
  );
}
