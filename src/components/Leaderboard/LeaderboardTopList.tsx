import { Link } from "react-router";
import { LeaderboardEntryComponent } from "./LeaderboardEntryComponent";
import Title from "../Title";
import { useLeaderboard } from "../../hooks/useLeaderboard";
import "../../styles/Leaderboard.css";
export function LeaderboardTopList() {
  const leaderboard = useLeaderboard();
  return (
    <div className="leaderboard-list">
      <Title size={4}>Leaderboard</Title>
      <div className="leaderboard-items pr-4">
        {leaderboard.map((entry, index) => (
          <div className="flex flex-row gap-4 items-center">
            <div className="w-16 text-right">
              <Title size={4}>#{index + 1}</Title>
            </div>
            <div className="flex-1">
              <Link to={`/submission/${entry.id}`} key={entry.id}>
                <LeaderboardEntryComponent entry={entry} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
