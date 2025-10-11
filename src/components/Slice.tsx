import "./slice.css";

interface SliceProps {
  angle: number;
  color: string;
}
export default function Slice(props: SliceProps) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        width: "50%",
        height: "50%",
        borderTopLeftRadius: "100%",
        transform: `rotate(${props.angle}deg)`,
        margin: 0,
        padding: 0,
      }}
      className="cliceClickDarken"
    />
  );
}
