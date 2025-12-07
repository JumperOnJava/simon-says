import type React from "react";
import './Button.css'

interface ButtonProps {
  click?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="button"
      style={props.style}
      onClick={props.click}
      children={props.children} 
    />
  );
}
