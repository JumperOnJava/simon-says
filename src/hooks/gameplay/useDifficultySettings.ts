import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { DifficultySettings } from "../../types/DifficultySettings";

export function useDifficultySettings() : DifficultySettings {
  return useSelector((state: RootState) => state.difficultySettings);
}
