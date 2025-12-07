import Slice from "./Slice";
import { useInputPhase } from "../hooks/gameplay/phase/useInputPhase";
import { useDisplayPhase } from "../hooks/gameplay/phase/useDisplayPhase";

export default function Slices() {
  const color = useDisplayPhase();
  const colorInput = useInputPhase();

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        className="flex flex-wrap"
      >
        <Slice angle={0} active={color} onClick={colorInput} color="lime" />
        <Slice angle={90} active={color} onClick={colorInput} color="red" />
        <Slice angle={270} active={color} onClick={colorInput} color="yellow" />
        <Slice angle={180} active={color} onClick={colorInput} color="blue" />
      </div>
    </>
  );
}
