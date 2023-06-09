import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import MobileNav from "./components/MobileNav/MobileNav";
import NavBar from "./components/NavBar/NavBar";

import Login from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import HistoryPage from "./pages/HistoryPage";
import AccountPage from "./pages/AccountPage";

import HistoryDetails from "./components/History/HistoryDetails";
import Profile from "./components/Profile/Profile";
import ProfilePlates from "./components/Profile/ProfilePlates";
import Contact from "./components/Account/AccountContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/:id/details" element={<HistoryDetails />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/plates" element={<ProfilePlates />} />
          <Route path="/account/contact" element={<Contact />} />
        </Routes>
        <MobileNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
