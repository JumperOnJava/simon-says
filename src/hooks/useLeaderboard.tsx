import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function useLeaderboard() {
  return useSelector((state: RootState) => state.leaderboard);
}
