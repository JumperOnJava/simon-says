import "../styles/Leaderboard.css";
import "./Page.css";
import { useParams } from "react-router";
import { entryFromId } from "../utils/leaderboardHelper";
import { format } from "date-fns";

export default function Submission() {
  const { uuid } = useParams();
  const entry = entryFromId(uuid);

  return (
    <div className="fullscreen-centered">
      <div className="submission-container">
        <span className="submission-id">Submission id: {entry.id}</span>
        <div
          className="submission-card"
          style={{ borderColor: `#${entry.borderColor}` }}
        >
          <div className="submission-header">
            <div className="emoji-circle">{entry.emoji || "N/A"}</div>
            <div className="username">{entry.username}</div>
          </div>
          <div className="score-label">Score:</div>
          <div className="score-value">{entry.score}</div>
          <div className="submission-date">
            at {format(entry.date, "MMMM dd, yyyy")}
          </div>
        </div>
      </div>
    </div>
  );
}
