import "../styles/Leaderboard.css";
import "./Page.css";
import { useParams } from "react-router";
import { format } from "date-fns";
import { useLeaderboardEntry } from "../hooks/useLeaderboardEntry";
import Title from "../components/Title";

export default function Submission() {
  const { uuid } = useParams();
  const entry = useLeaderboardEntry(uuid!);

  return (
    <div className="fullscreen-centered">
      {entry ? (
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
            <div className="score-label-large">Score:</div>
            <div className="score-value">{entry.score}</div>
            <div className="submission-date">
              at {format(entry.date, "MMMM dd, yyyy")}
            </div>
          </div>
        </div>
      ) : (
        <Title size={4}>Error: Submission not found</Title>
      )}
    </div>
  );
}
