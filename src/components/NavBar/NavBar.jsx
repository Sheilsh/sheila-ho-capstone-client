import React, { useState } from "react";
import "./NavBar.scss";
import home from "../../assets/icons/home.svg";
import calendar from "../../assets/icons/calendar.svg";
import history from "../../assets/icons/list.svg";
import user from "../../assets/icons/user.svg";
import logout from "../../assets/icons/log-out.svg";
import logo from "../../assets/logo/free-parking-sign.png";

export default function NavBar() {
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
            <img src={home} />
          </div>
          <div
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            <img src={calendar} />
          </div>
          <div
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            <img src={history} />
          </div>
          <div
            className={active === 3 ? "active" : ""}
            onClick={() => setActive(3)}
          >
            <img src={user} />
          </div>
        </nav>

        {/* ------DESKTOP STYLES------ */}
        <nav className="desknav">
          <div className="desknav__wrapper">
            <div className="desknav__navigation">
              <a className="desknav__logo" href="#">
                <img className="desknav__logo--img" src={logo} />
                <span className="desknav__logo--name">Parking App</span>
              </a>
              <ul className="desknav__list">
                <li className="desknav__listitem">
                  <a href="#">
                    <img className="desknav__icon" src={home} />
                    <span className="desknav__listname">Home</span>
                  </a>
                </li>
                <li className="desknav__listitem">
                  <a href="#">
                    <img className="desknav__icon" src={calendar} />
                    <span className="desknav__listname">Calender</span>
                  </a>
                </li>
                <li className="desknav__listitem">
                  <a href="#">
                    <img className="desknav__icon" src={history} />
                    <span className="desknav__listname">History</span>
                  </a>
                </li>
                <li className="desknav__listitem">
                  <a href="#">
                    <img className="desknav__icon" src={user} />
                    <span className="desknav__listname">Account</span>
                  </a>
                </li>
                <li className="desknav__listitem">
                  <a href="#" className="logout">
                    <img className="desknav__icon" src={logout} />
                    <span className="desknav__listname">Log out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
