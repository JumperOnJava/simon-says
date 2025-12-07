interface TitleProps {
  size: number;
  className?: string;
  children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  let stylesize;
  stylesize = props.size;

  if (props.size === 1) {
    stylesize = "";
  }

  return (
    <span
      style={{
        fontSize: `${props.size * 0.25 + 1.25}rem`,
      }}
      className={`${props.className || ""}`}
      children={props.children}
    />
  );
}
