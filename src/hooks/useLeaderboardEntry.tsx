import type { LeaderboardEntry } from "../types/LeaderboardEntry";
import { useLeaderboard } from "./useLeaderboard";


export function useLeaderboardEntry(uuid: string) : LeaderboardEntry | undefined {
  const leaderboard = useLeaderboard();
  return leaderboard[uuid];
}
