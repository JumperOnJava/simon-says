import "./slice.css";

interface SliceProps {
  angle: number;
  colorActive: string;
  colorInactive: string;
  active: boolean;
  onClick: () => void;
}
export default function Slice(props: SliceProps) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.active ? props.colorActive : props.colorInactive,
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
