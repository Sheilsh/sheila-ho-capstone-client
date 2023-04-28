import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";
import home from "../../assets/icons/home.svg";
import calendar from "../../assets/icons/calendar.svg";
import history from "../../assets/icons/list.svg";
import user from "../../assets/icons/user.svg";
import logout from "../../assets/icons/log-out.svg";

export default function MobileNav() {
  const [active, setActive] = useState(0);
  return (
    <nav className="mobilenav">
      <div className="mobilenav__wrapper">
        {/* <div className="nav__headings">
          <h1>{["Home", "Calendar", "History", "Account"][active]}</h1>
        </div> */}
        <nav className="mobilenav__bar">
          <div
            className={active === 0 ? "active" : ""}
            onClick={() => setActive(0)}
          >
            <Link to="/">
              <img className="mobilenav__icon" src={home} />
            </Link>
          </div>
          <div
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            <Link to="/booking">
              <img className="mobilenav__icon" src={calendar} />
            </Link>
          </div>
          <div
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            <Link to="/history">
              <img className="mobilenav__icon" src={history} />
            </Link>
          </div>
          <div
            className={active === 3 ? "active" : ""}
            onClick={() => setActive(3)}
          >
            <Link to="account">
              <img className="mobilenav__icon" src={user} />
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
}
