import { SliceColors } from "../types/GameState";

export function generateCombination(length: number) {
  return [...Array(length)].map(randomSliceColor);
}
export function randomSliceColor() {
  return SliceColors[Math.floor(Math.random() * SliceColors.length)];
}
