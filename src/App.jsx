import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import "./App.css";

// router info

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1>Sheila's Capstone Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <NavBar />
    </div>
  );
}

export default App;
