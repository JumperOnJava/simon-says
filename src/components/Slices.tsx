import Slice from "./Slice";

export default function Slices() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className="flex flex-wrap"
  >
  <Slice angle={0} color="lime" />
  <Slice angle={90} color="red" />
  <Slice angle={270} color="yellow" />
  <Slice angle={180} color="blue" />
  </div>

  );
}
