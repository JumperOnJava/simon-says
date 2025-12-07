import { useScore } from "../hooks/gameplay/useScore";
import "./slice.css";
import Title from "./Title";
import "./Counter.css"

export default function Counter() {
  const score = useScore();

  return (
    <div className="absolute inset-[30%] rounded-[100%] flex counter-color pointer-events-none">
      <div className="flex flex-1 justify-center items-center flex-col">
        <div>Score:</div>
        <Title size={4}>{score}</Title>
      </div>
    </div>
  );
}
