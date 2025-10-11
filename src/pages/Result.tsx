import { useEffect, useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";

export default function Result() {
  const [score, setScore] = useState(0);

  //я використав одноразовий useEffect щоб лінтер не ругався що setScore не використовується
  useEffect(() => {
    setScore(Math.round(Math.random() * 20));
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <Title size={3}>Your score:</Title>
      <Title size={6} className="font-bold">{score}</Title>
      <Title size={1}>Good job</Title>
      <div>
        <Button>Home</Button>
        <Button>Restart</Button>
      </div>
    </div>
  );
}
