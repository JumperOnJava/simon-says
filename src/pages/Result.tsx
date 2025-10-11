import { useEffect, useState } from "react";
import Button from "../components/Button";

export default function Result() {
  const [score, setScore] = useState(0);

  //я використав одноразовий useEffect щоб лінтер не ругався що setScore не використовується
  useEffect(() => {
    setScore(Math.round(Math.random() * 20));
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-3xl">Your score:</div>
      <div className="text-6xl font-bold">{score}</div>
      <div className="text-xl">Good job</div>
      <div>
        <Button>Home</Button>
        <Button>Restart</Button>
      </div>
    </div>
  );
}
