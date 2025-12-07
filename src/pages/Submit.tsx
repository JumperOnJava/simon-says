import Button from "../components/Button";
import "../styles/Leaderboard.css";
import { LeaderboardSubmitForm } from "../components/Leaderboard/LeaderboardSubmitForm";
import "./Page.css";
import { Link } from "react-router";
import {
  LeaderboardTopList,
} from "../components/Leaderboard/LeaderboardTopList";

export default function Submit() {
  return (
    <div className="fullscreen-centered">
      <div className="leaderboard-container">
        <div className="leaderboard-sections">
          <LeaderboardSubmitForm />
          <LeaderboardTopList />
        </div>

        <div className="bottom-buttons">
          <Button click={() => {}}>
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
