import { type LeaderboardEntry } from "../types/LeaderboardEntry";
import { entryFromId } from "../utils/leaderboardHelper";

export function useLeaderboard(): LeaderboardEntry[] {
  const array: LeaderboardEntry[] = (
    JSON.parse(localStorage.getItem("leaderboard")!) ?? []
  ).map(entryFromId);

  array.sort((a, b) => b.score - a.score);

  return array;
}
