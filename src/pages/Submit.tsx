import Button from "../components/Button";
import "../styles/Leaderboard.css";
import { LeaderboardSubmitForm } from "../components/Leaderboard/LeaderboardSubmitForm";
import "./Page.css";
import { Link, useSearchParams } from "react-router";
import { useLeaderboardEntry } from "../hooks/useLeaderboardEntry";
import PathError from "../components/PathError";

export default function Submit() {
  const [searchParams] = useSearchParams();
  const queryUUID = searchParams.get("id");
  const score = searchParams.get("score");
  const scoreNumber = score == null ? NaN : Number(score);
  const entry = useLeaderboardEntry(queryUUID || "");

  return (
    <div className="fullscreen-centered">
      {entry ? (
        <PathError>Entry already sumbitted</PathError>
      ) : isNaN(scoreNumber) || queryUUID == null ? (
        <PathError>Invalid parameters</PathError>
      ) : (
        <div className="leaderboard-container">
          <div className="leaderboard-sections">
            <LeaderboardSubmitForm id={queryUUID} score={scoreNumber} />
          </div>

          <div className="bottom-buttons">
            <Button click={() => {}}>
              <Link to="/">Home</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
