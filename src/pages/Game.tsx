import { useState } from "react";
import Pad from "../components/Pad";
import { GameContext, type GameState } from "../context/GameContext";
import { generateCombination } from "../utils/combination";
import { useInactivePhase } from "../hooks/gameplay/phase/useInactivePhase";
import Button from "../components/Button";
import { GameOverModal } from "../components/GameOverModal";
import { useDifficultySettings } from "../hooks/gameplay/useDifficultySettings";
import "./Page.css";

export default function Game() {
  const difficulty = useDifficultySettings();
  const [gameState, setGameState] = useState<GameState>({
    combination: generateCombination(difficulty.colorsPerRound),
    inputCombination: [],
    phase: "inactive",
    score: 0,
  });

  const gameContext = {
    state: gameState,
    setState: setGameState,
  };

  return (
    <GameContext.Provider value={gameContext}>
      <GameInner />
      {gameState.phase == "failed" ? <GameOverModal></GameOverModal> : <></>}
    </GameContext.Provider>
  );
}

function GameInner() {
  const start = useInactivePhase();

  return (
    <div className="fullscreen-centered">
      <div className="justify-center align-middle flex flex-col gap-8 relative">
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
    </div>
  );
}
