import { useState } from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import {
  PageContext,
  useBasicNavigation,
  type Page,
} from "./context/PageContext";

function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <AppInner />
    </PageContext.Provider>
  );
}

function AppInner() {
  const navigation = useBasicNavigation();
  const page = navigation.page;
  return (
    <>
      <div className="flex flex-col h-screen">

        <div className="bg-gray-900 flex-1 text-white flex justify-center items-center">
          {page === "home" ? <Home /> : page === "game" ? <Game /> : <Leaderboard />}
        </div>
      </div>
    </>
  );
}

export default App;
