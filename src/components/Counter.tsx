import "./slice.css";
import Title from "./Title";

interface CounterProps {
  score: number;
}

export default function Counter(props: CounterProps) {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div>Score:</div>
      <Title size={4}>{props.score}</Title>
    </div>
  );
}
