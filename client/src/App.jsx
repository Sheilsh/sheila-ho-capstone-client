import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashBoard from "./pages/DashBoard/DashBoard";
import LogIn from "./pages/LogIn/LogIn";
import "./App.scss";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/booking" element={<Booking />} />
          {/* <Route path="/history" element={<History />} /> */}
          {/* <Route path="/account" element={<Account />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
