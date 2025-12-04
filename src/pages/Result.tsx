import Button from "../components/Button";
import Title from "../components/Title";
import { useBasicNavigation } from "../context/PageContext";
import { useLeaderboard } from "../hooks/useLeaderBoard";

export default function Result() {
  const score = Number(localStorage.getItem("score"));
  const navigation = useBasicNavigation();
  const leaderboard = useLeaderboard();

  return (
    <div className="flex flex-col items-center gap-8">
      <Title size={4}>Game Over</Title>
      <div className="flex gap-16 w-full justify-center">
        <div className="flex flex-col items-center gap-4">
          <Title size={2}>Your score:</Title>
          <Title size={4} className="font-bold">
            {score}
          </Title>
          <Title size={2}>Good job</Title>
          <div className="flex gap-4 mt-4">
            <Button click={() => navigation.setPage("home")}>Home</Button>
            <Button click={() => navigation.setPage("game")}>Restart</Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Title size={3}>Leaderboard</Title>
          <div className="flex flex-col gap-1">
            {leaderboard.map((entry, index) => (
              <div
                key={entry.id}
                className="flex justify-between w-48 px-2 py-1 rounded-md"
              >
                <span>{index + 1}. {entry.username}</span>
                <span>{entry.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
