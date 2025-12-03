import { useActiveSlice } from "../hooks/useActiveSlice";
import Slice from "./Slice";
import { useColorInput } from "../hooks/useColorInput";

export default function Slices() {
  const color = useActiveSlice();
  const colorInput = useColorInput();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        className="flex flex-wrap"
      >
        <Slice
          angle={0}
          active={color == "lime"}
          onClick={() => colorInput("lime")}
          colorActive="lime"
          colorInactive="#007f00"
        />
        <Slice
          angle={90}
          active={color == "red"}
          onClick={() => colorInput("red")}
          colorActive="red"
          colorInactive="#7f0000"
        />
        <Slice
          angle={270}
          active={color == "yellow"}
          onClick={() => colorInput("yellow")}
          colorActive="yellow"
          colorInactive="#7f7f00"
        />
        <Slice
          angle={180}
          active={color == "blue"}
          onClick={() => colorInput("blue")}
          colorActive="blue"
          colorInactive="#00007f"
        />
      </div>
    </>
  );
}
