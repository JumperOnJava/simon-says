import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Leaderboard } from "../types/Leaderboard";
import type { LeaderboardEntry } from "../types/LeaderboardEntry";

const initialState = {
  entries: {} as Leaderboard,
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setEntry: (state, action: PayloadAction<LeaderboardEntry>) => {
      const entry = action.payload;
      state.entries[entry.id] = entry;
    },
  },
});

export const { setEntry: addEntry } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
