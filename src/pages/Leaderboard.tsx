import Button from "../components/Button";
import Title from "../components/Title";
import { useBasicNavigation } from "../context/PageContext";
import { useLeaderboard } from "../hooks/useLeaderboard";
import "./Leaderboard.css";
import { LeaderboardSubmitForm } from "../components/LeaderboardSubmitForm";
import { LeaderboardEntryComponent } from "../components/LeaderBoardEntry";

export default function Leaderboard() {
  const navigation = useBasicNavigation();
  const leaderboard = useLeaderboard();

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-sections">
        <LeaderboardSubmitForm />

        <div className="leaderboard-list">
          <Title size={3}>Leaderboard</Title>
          <div className="leaderboard-items">
            {leaderboard.map((entry) => (
              <LeaderboardEntryComponent entry={entry} key={entry.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-buttons">
        <Button click={() => navigation.setPage("home")}>Home</Button>
      </div>
    </div>
  );
}
