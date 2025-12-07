import type { SliceColor } from "../context/GameContext";
import "./slice.css";

interface SliceProps {
  angle: number;
  color: SliceColor;
  active: SliceColor | null;
  onClick: (color: SliceColor) => void;
}
export default function Slice(props: SliceProps) {
  return (
    <button
      onClick={() => props.onClick(props.color)}
      style={
        {
          "--color-click": `var(--color-${props.color}-active)`,
          "--color-noclick": `var(--color-${props.color}-${
            props.active == props.color ? "active" : "inactive"
          })`,
          "--angle": `${props.angle}deg`,
        } as React.CSSProperties
      }
      className="slice"
    />
  );
}
