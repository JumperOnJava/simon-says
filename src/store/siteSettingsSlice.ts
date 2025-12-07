import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ColorScheme = "light" | "dark";

interface SiteSettings {
  theme: ColorScheme;
  sounds: boolean;
}

const initialState: SiteSettings = {
  theme: "light",
  sounds: true,
};

const siteSettingsSlice = createSlice({
  name: "siteSettings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ColorScheme>) => {
      state.theme = action.payload;
    },
    setSounds: (state, action: PayloadAction<boolean>) => {
      state.sounds = action.payload;
    },
  },
});

export const { setTheme, setSounds } = siteSettingsSlice.actions;
export default siteSettingsSlice.reducer;
