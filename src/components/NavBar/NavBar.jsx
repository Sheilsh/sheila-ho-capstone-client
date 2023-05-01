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
  const links = [
    { name: "Home", icon: home, route: "/" },
    { name: "Booking", icon: calendar, route: "/booking" },
    { name: "History", icon: history, route: "/history" },
    { name: "Account", icon: user, route: "/account" },
    // { name: "Log Out", icon: logout, route: "/signup" },
  ];

  return (
    <>
      {/* ------DESKTOP STYLES------ */}
      <nav className="nav">
        <div className="nav__wrapper">
          <div className="nav__navigation">
            <Link className="nav__logo" to="/">
              <img className="nav__logo--img" src={logo} />
            </Link>
            <ul className="nav__list">
              {links.map((link, index) => (
                <li className="nav__listitem" key={index}>
                  <Link to={link.route}>
                    <img className="nav__icon" src={link.icon} />
                    <span className="nav__listname">{link.name}</span>
                  </Link>
                </li>
              ))}
              {/* <li className="nav__listitem">
                <Link to="/booking">
                  <img className="nav__icon" src={calendar} />
                  <span className="nav__listname">Booking</span>
                </Link>
              </li>
              <li className="nav__listitem">
                <Link to="/history">
                  <img className="nav__icon" src={history} />
                  <span className="nav__listname">History</span>
                </Link>
              </li>
              <li className="nav__listitem">
                <Link to="/account">
                  <img className="nav__icon" src={user} />
                  <span className="nav__listname">Account</span>
                </Link>
              </li> */}
              <li className="nav__listitem">
                <Link to="/signup" className="logout">
                  <img className="nav__icon" src={logout} />
                  <span className="nav__listname">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
