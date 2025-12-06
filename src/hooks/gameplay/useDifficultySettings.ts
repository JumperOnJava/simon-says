import type { DifficultySettings } from "../../types/DifficultySettings";

export function useDifficultySettings() : DifficultySettings {
  return {
    speed: 500,
    colorsPerRound: 1,
    ...JSON.parse(localStorage.getItem("difficulty")!),
  };
}
