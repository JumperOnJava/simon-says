import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { firstGenerateLeaderboard } from "./utils/leaderboardHelper.ts";
import { SeedRandom } from "./utils/random.ts";

firstGenerateLeaderboard();

console.log(new SeedRandom("6ddaa99c-621f-43ff-a88b-4de8f2659553").rand())
console.log(new SeedRandom("6ddaa99c-621f-43ff-a88b-4de8f2659553").rand())
console.log(new SeedRandom("6ddaa99c-621f-43ff-a88b-4de8f2659553").rand())
console.log(new SeedRandom("6ddaa99c-621f-43ff-a88b-4de8f2659553").rand())


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
