import { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useBasicNavigation } from "../context/PageContext";

export default function Home() {
  const navigation = useBasicNavigation();

  //Currently unimplemented
  const [speed, setSpeed] = useState(800);
  const [colorCount, setColorCount] = useState(1);

  return (
    <div className="justify-center align-middle flex flex-col w-64 gap-8">
      <Title size={4} className="font-bold text-center">
        Simon Says
      </Title>

      <img src="/simon.png" className="invert" />

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
        <p className="text-center text-sm mt-1">{speed} ms per second</p>
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

      <Button
        click={() => {
          navigation.setPage("game");
        }}
      >
        <Title size={2} className="block mb-1">
          Play game
        </Title>
      </Button>
    </div>
  );
}
