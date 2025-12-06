import { Link } from "react-router";
import {
  LeaderboardEntryComponent,
} from "./LeaderboardEntryComponent";
import Title from "../Title";
import { useLeaderboard } from "../../hooks/useLeaderboard";

export function LeaderboardTopList() {
  const leaderboard = useLeaderboard();
  return (
    <div className="leaderboard-list">
      <Title size={3}>Leaderboard</Title>
      <div className="leaderboard-items">
        {leaderboard.map((entry) => (
          <Link to={`/submission/${entry.id}`} key={entry.id}>
            <LeaderboardEntryComponent entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
}
