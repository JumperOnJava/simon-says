import "../styles/Leaderboard.css";
import "./Page.css";
import { Link, useParams } from "react-router";
import { format } from "date-fns";
import { useLeaderboardEntry } from "../hooks/useLeaderboardEntry";
import PathError from "../components/PathError";
import Button from "../components/Button";

export default function Submission() {
  const { uuid } = useParams();
  const entry = useLeaderboardEntry(uuid!);

  return (
    <div className="fullscreen-centered">
      {entry ? (
        <div className="flex flex-col self-stretch items-center">
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
          <div className="flex flex-row">
            <Button click={() => {}}>
              <Link to="/">Home</Link>
            </Button>
            <Button click={() => {}}>
              <Link to="/leaderboard">Leaderboard</Link>
            </Button>
          </div>
        </div>
      ) : (
        <PathError>Submission not found</PathError>
      )}
    </div>
  );
}
