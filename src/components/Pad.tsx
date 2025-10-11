import { useState } from "react";
import Counter from "./Counter";
import Slices from "./Slices";

export default function Pad() {
  const [score, setScore] = useState<number>(0);

  setTimeout(()=>{setScore(score+1)},1000)

  return (
    <div className="relative w-96 h-96">
      <Slices />
      <div className="absolute inset-[30%] rounded-[100%] bg-gray-700 flex">
        <Counter score={score} />
      </div>
    </div>
  );
}
