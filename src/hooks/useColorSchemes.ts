import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useEffect } from "react";

export function useColorScheme() {
  const mode = useSelector((state: RootState) => state.siteSettings.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (mode == "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);
}
