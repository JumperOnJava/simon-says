import {
  type LeaderboardEntry,
} from "../types/LeaderboardEntry";

export function useLeaderboard(): LeaderboardEntry[] {
  const array: LeaderboardEntry[] =
    JSON.parse(localStorage.getItem("leaderboard")!) ?? [];

  array.sort((a, b) => b.score - a.score);

  return array;
}

