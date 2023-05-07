import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import MobileNav from "./components/MobileNav/MobileNav";
import NavBar from "./components/NavBar/NavBar";

import LogIn from "./pages/LogIn/LogIn";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/account" element={<Account />} /> */}
        </Routes>
        <MobileNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
