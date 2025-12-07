import { useEffect, useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useDifficultySettings } from "../hooks/gameplay/useDifficultySettings";
import "./Page.css";
import "./Home.css";
import { Link } from "react-router";

export default function Home() {
  const difficulty = useDifficultySettings();

  const [speed, setSpeed] = useState(difficulty.speed);
  const [colorCount, setColorCount] = useState(difficulty.colorsPerRound);

  //моя спроба написати debounce
  useEffect(() => {
    const write = setTimeout(() => {
      localStorage.setItem(
        "difficulty",
        JSON.stringify({
          speed: speed,
          colorsPerRound: colorCount,
        })
      );
      console.log("saved localstorage");
    }, 200);
    return () => {
      console.log("delayed localstorage");
      clearTimeout(write);
    };
  }, [speed, colorCount]);

  return (
    <div className="fullscreen-centered">
      <div className="justify-center align-middle flex flex-col w-64 gap-8">
        <Title size={4} className="font-bold text-center">
          Simon Says
        </Title>

        <img src="/simon.png" className="logo-image" />

        <div>
          <Title size={2} className="mb-1">
            Speed
          </Title>
          <input
            type="range"
            min="200"
            max="1500"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-center text-sm mt-1">{speed} ms per color</p>
        </div>

        <div>
          <Title size={2} className="mb-1">
            Colors per round
          </Title>
          <input
            type="range"
            min="1"
            max="4"
            step="1"
            value={colorCount}
            onChange={(e) => setColorCount(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-center text-sm mt-1">
            +{colorCount} color(s) per round
          </p>
        </div>
        <div className="flex flex-col">
          <Button click={() => {}}>
            <Link to="/play">
              <Title size={2} className="block mb-1">
                Play game
              </Title>
            </Link>
          </Button>
          <Button click={() => {}}>
            <Link to="/leaderboard">
              <Title size={1} className="block mb-1">
                Leaderboard
              </Title>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
