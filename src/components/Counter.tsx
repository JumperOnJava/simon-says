import { useLevel } from "../hooks/useLevel";
import "./slice.css";
import Title from "./Title";

export default function Counter() {
  const score = useLevel();

  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div>Score:</div>
      <Title size={4}>{score}</Title>
    </div>
  );
}
