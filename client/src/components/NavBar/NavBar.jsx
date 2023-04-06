import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import home from "../../assets/icons/home.svg";
import calendar from "../../assets/icons/calendar.svg";
import history from "../../assets/icons/list.svg";
import user from "../../assets/icons/user.svg";
import logout from "../../assets/icons/log-out.svg";
import logo from "../../assets/logo/logo2.png";

export default function NavBar() {
  return (
    <>
      {/* ------DESKTOP STYLES------ */}
      <nav className="desknav">
        <div className="desknav__wrapper">
          <div className="desknav__navigation">
            <a className="desknav__logo" href="#">
              <img className="desknav__logo--img" src={logo} />
              {/* <span className="desknav__logo--name">Parking App</span> */}
            </a>
            <ul className="desknav__list">
              <li className="desknav__listitem">
                <Link to="/">
                  <img className="desknav__icon" src={home} />
                  <span className="desknav__listname">Home</span>
                </Link>
              </li>
              <li className="desknav__listitem">
                <Link to="/booking">
                  <img className="desknav__icon" src={calendar} />
                  <span className="desknav__listname">Booking</span>
                </Link>
              </li>
              <li className="desknav__listitem">
                <Link to="/history">
                  <img className="desknav__icon" src={history} />
                  <span className="desknav__listname">History</span>
                </Link>
              </li>
              <li className="desknav__listitem">
                <Link to="/account">
                  <img className="desknav__icon" src={user} />
                  <span className="desknav__listname">Account</span>
                </Link>
              </li>
              <li className="desknav__listitem">
                <Link to="/signup" className="logout">
                  <img className="desknav__icon" src={logout} />
                  <span className="desknav__listname">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
