interface TitleProps {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  className?: string;
  children: React.ReactNode
}

export default function Title(props: TitleProps) {
  let stylesize;
  stylesize = props.size;

  if (props.size === 1) {
    stylesize = "";
  }

  return <span className={`text-${stylesize}xl ${props.className}`} children={props.children} />;
}
