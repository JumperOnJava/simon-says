import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
import Submission from "./pages/Submission";
import Submit from "./pages/Submit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="play" element={<Game />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="submit" element={<Submit />} />
        <Route path="submission/:uuid" element={<Submission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
