import "./slice.css";

interface CounterProps{
    score: number;
}

export default function Counter(props: CounterProps) {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div>Score:</div>
      <div className="text-4xl">{props.score}</div>
    </div>
  );
}
