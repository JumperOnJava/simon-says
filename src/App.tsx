import { useState } from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Button from "./components/Button";

function App() {
  const [page, setPage] = useState<"home" | "game" | "result">("home");

  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
        <Button click={() => setPage("home")}>Start</Button>
        <Button click={() => setPage("game")}>Game</Button>
        <Button click={() => setPage("result")}>Result</Button>
        </div>
        <hr />
        <div className="bg-gray-900 flex-1 text-white">
        {
          page === "home" ? <Home /> : 
          page === "game" ? <Game /> :
                            <Result />
        }
        </div>
      </div>
    </>
  );
}

export default App;
