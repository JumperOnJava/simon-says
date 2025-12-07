import type { SliceColor } from "../context/GameContext";
import { useSound } from "../hooks/useSound";
import "./slice.css";

interface SliceProps {
  angle: number;
  color: SliceColor;
  active: SliceColor | null;
  onClick: (color: SliceColor) => void;
}
export default function Slice(props: SliceProps) {
  const playSound = useSound(`/beep_${props.color}.mp3`);
  return (
    <button
      onClick={() => {
        playSound();
        return props.onClick(props.color);
      }}
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
