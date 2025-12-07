import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Leaderboard } from "../types/Leaderboard";
import type { LeaderboardEntry } from "../types/LeaderboardEntry";

const initialState: Leaderboard = {};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setEntry: (state, action: PayloadAction<LeaderboardEntry>) => {
      const entry = action.payload;
      state[entry.id] = entry;
    },
  },
});

export const { setEntry } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
