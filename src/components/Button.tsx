import type React from "react";

interface ButtonProps {
  click?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="rounded-sm bg-teal-700 hover:bg-teal-800 active:bg-teal-900 m-1 px-2 text-white font-sans"
      style={props.style}
      onClick={props.click}
      children={props.children} 
    />
  );
}
