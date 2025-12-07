import { Link } from "react-router";
import Button from "./Button";
import Title from "./Title";

export default function PathError({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Title size={4}>{children}</Title>
      <Button click={() => {}}>
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}
