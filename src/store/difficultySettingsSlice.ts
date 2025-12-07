import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DifficultySettings } from "../types/DifficultySettings";

const initialState: DifficultySettings = {
  speed: 500,
  colorsPerRound: 1,
};

const difficultySettingsSlice = createSlice({
  name: "gameplaySettings",
  initialState,
  reducers: {
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    setColorsPerRound: (state, action: PayloadAction<number>) => {
      state.colorsPerRound = action.payload;
    },
    resetDifficultySettings: (state) => {
      state.speed = 500;
      state.colorsPerRound = 1;
    },
  },
});

export const { setSpeed, setColorsPerRound, resetDifficultySettings } =
  difficultySettingsSlice.actions;
export default difficultySettingsSlice.reducer;
