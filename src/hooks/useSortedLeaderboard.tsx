import type { LeaderboardEntry } from "../types/LeaderboardEntry";
import { useLeaderboard } from "./useLeaderboard";


export function useSortedLeaderboard(): LeaderboardEntry[] {
  const array = Object.values(useLeaderboard()) as LeaderboardEntry[];
  array.sort((a, b) => b.score - a.score);

  return array;
}
