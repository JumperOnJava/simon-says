import { useState } from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Result from "./pages/Result";
import TestPageSelector from "./components/TestPageSelector";

function App() {
  const [page, setPage] = useState<"home" | "game" | "result">("home");

  return (
    <>
      <div className="flex flex-col h-screen">
        
        <TestPageSelector pageSelectCallback={setPage} />

        <div className="bg-gray-900 flex-1 text-white flex justify-center items-center">
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
