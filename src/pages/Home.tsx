import Button from "../components/Button";
import Title from "../components/Title";
import { useBasicNavigation } from "../context/PageContext";

export default function Home() {
  const navigation = useBasicNavigation();

  return (
    <div className="justify-center align-middle flex flex-col w-64 gap-8">
      <Title size={4} className="font-bold text-center">
        Simon Says
      </Title>
      <img src="/simon.png" className="invert"></img>
      <Button
        click={() => {
          navigation.setPage("game");
        }}
      >
        <Title size={2} className="block mb-1">
          Play game
        </Title>
      </Button>
    </div>
  );
}
