import Counter from "./Counter";
import Slices from "./Slices";

export default function Pad() {
  return (
    <div className="relative w-96 h-96">
      <Slices />
      <div className="absolute inset-[30%] rounded-[100%] bg-gray-700 flex">
        <Counter />
      </div>
    </div>
  );
}
