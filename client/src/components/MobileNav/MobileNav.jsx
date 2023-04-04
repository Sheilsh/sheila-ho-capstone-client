import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";
import home from "../../assets/icons/home.svg";
import calendar from "../../assets/icons/calendar.svg";
import history from "../../assets/icons/list.svg";
import user from "../../assets/icons/user.svg";
import logout from "../../assets/icons/log-out.svg";
import logo from "../../assets/logo/free-parking-sign.png";

export default function MobileNav() {
  const [active, setActive] = useState(0);
  return (
    <header>
      <div className="nav">
        {/* <div className="nav__headings">
          <h1>{["Home", "Calendar", "History", "Account"][active]}</h1>
        </div> */}
        <nav className="navbar">
          <div
            className={active === 0 ? "active" : ""}
            onClick={() => setActive(0)}
          >
            <Link to="/">
              <img src={home} />
            </Link>
          </div>
          <div
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            <Link to="/booking">
              <img src={calendar} />
            </Link>
          </div>
          <div
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            <Link to="/history">
              <img src={history} />
            </Link>
          </div>
          <div
            className={active === 3 ? "active" : ""}
            onClick={() => setActive(3)}
          >
            <Link to="account">
              <img src={user} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
