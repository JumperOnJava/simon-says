import { configureStore } from "@reduxjs/toolkit";
import leaderboardReducer from "./leaderboardSlice";
import difficultySettingsReducer from "./difficultySettingsSlice";
import siteSettingsReducer from "./siteSettingsSlice";
import { loadState, saveState } from "../utils/localstorage";

const persistedLeaderboard = loadState("leaderboard");
const persistedDifficultySettings = loadState("difficultySettings");
const persistedSiteSettings = loadState("siteSettings");

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
    difficultySettings: difficultySettingsReducer,
    siteSettings: siteSettingsReducer,
  },
  preloadedState: {
    leaderboard: persistedLeaderboard,
    difficultySettings: persistedDifficultySettings,
    siteSettings: persistedSiteSettings,
  },
});

store.subscribe(() => {
  saveState("leaderboard", store.getState().leaderboard);
  saveState("difficultySettings", store.getState().difficultySettings);
  saveState("siteSettings", store.getState().siteSettings);
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
