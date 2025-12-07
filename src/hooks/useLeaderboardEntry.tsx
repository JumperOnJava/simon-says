import type { LeaderboardEntry } from "../types/LeaderboardEntry";
import { useLeaderboard } from "./useLeaderboard";


export function useLeaderboardEntry(uuid: string) : LeaderboardEntry {
  const leaderboard = useLeaderboard();
  return leaderboard.entries[uuid];
}
