import { createPortal } from "react-dom";
import { useFailedPhase } from "../hooks/gameplay/phase/useFailedPhase";
import Button from "./Button";
import Title from "./Title";
import { Link } from "react-router";
import "./GameOverModal.css";

export function GameOverModal() {
  return createPortal(<GameOverModalInner />, document.body);
}

function GameOverModalInner() {
  const failedPhase = useFailedPhase();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col">
      <div className="absolute opacity-30 bg-black top-0 left-0 w-full h-full -z-10 " />
      <div className="modal-container p-8">
        <div className="flex flex-col items-center gap-4">
          <Title size={4} className="font-bold">
            Game Over
          </Title>
          <Title size={2}>Your score:</Title>
          <Title size={4} className="font-bold">
            {failedPhase.score}
          </Title>
          <Title size={2}>Good job</Title>
          <div className="flex gap-4 mt-4">
            <Button click={() => {}}>
              <Link to="/">Home</Link>
            </Button>
            <Button click={() => failedPhase.restart()}>Restart</Button>
          </div>
          <Button click={() => {}}>
            <Link
              to={`/submit?score=${
                failedPhase.score
              }&id=${crypto.randomUUID()}`}
            >
              Submit leaderboard entry
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
