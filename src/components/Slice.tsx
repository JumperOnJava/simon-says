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
      style={
        {
          "--color-click": props.colorActive,
          "--color-noclick": props.active
            ? props.colorActive
            : props.colorInactive,
          "--angle": `${props.angle}deg`,
        } as React.CSSProperties
      }
      className="slice"
    />
  );
}
