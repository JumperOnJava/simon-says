import { format } from "date-fns";
import type { LeaderboardEntry } from "../types/LeaderboardEntry";

interface LeaderboardEntryProps {
  entry: LeaderboardEntry;
}

export function LeaderboardEntryComponent(props: LeaderboardEntryProps) {
  const entry = props.entry;
  return (
    <div
      className="flex justify-between items-center p-4 my-2"
      style={{
        border: `2px solid #${entry.borderColor}`,
        backgroundColor: "#1f1f1f",
      }}
    >
      <div className="flex items-center gap-3">
        {entry.emoji && <span className="text-2xl">{entry.emoji}</span>}
        <span className="font-semibold">{entry.username}</span>
      </div>

      <div className="text-right">
        <div className="font-bold text-lg">{entry.score}</div>
        <div className="text-sm text-gray-400">
          {format(new Date(entry.date), "MMM d, yyyy")}
        </div>
      </div>
    </div>
  );
}
