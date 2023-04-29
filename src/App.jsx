import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import LogIn from "./pages/LogIn/LogIn";
import "./App.scss";
import Booking from "./pages/Booking/Booking";
import MobileNav from "./components/MobileNav/MobileNav";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/booking" element={<Booking />} />
          {/* <Route path="/history" element={<History />} /> */}
          {/* <Route path="/account" element={<Account />} /> */}
        </Routes>
        <MobileNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
