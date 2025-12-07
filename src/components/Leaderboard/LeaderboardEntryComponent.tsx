import { format } from "date-fns";
import type { LeaderboardEntry } from "../../types/LeaderboardEntry";
import "../../styles/Leaderboard.css";

interface LeaderboardEntryProps {
  entry: LeaderboardEntry;
}

export function LeaderboardEntryComponent({ entry }: LeaderboardEntryProps) {
  return (
    <div className="leaderboard-entry" style={{ borderColor: `#${entry.borderColor}` }}>
      <div className="leaderboard-user">
        {entry.emoji && <span className="leaderboard-emoji">{entry.emoji}</span>}
        <span className="leaderboard-username">{entry.username}</span>
      </div>
      <div className="leaderboard-info">
        <div className="leaderboard-score">
          Score: <span className="leaderboard-score-value">{entry.score}</span>
        </div>
        <div className="leaderboard-date">{format(entry.date, "MMM d, yyyy")}</div>
      </div>
    </div>
  );
}
