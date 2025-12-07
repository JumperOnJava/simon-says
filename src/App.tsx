import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
import Submission from "./pages/Submission";
import Submit from "./pages/Submit";
import NotFound from "./pages/NotFound";
import store from "./store/store";
import { Provider } from "react-redux";
import { useColorScheme } from "./hooks/useColorSchemes";

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

function AppInner() {
  useColorScheme();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="play" element={<Game />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="submit" element={<Submit />} />
        <Route path="submission/:uuid" element={<Submission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
