import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./MobileNav.scss";
import home from "../../assets/icons/home.svg";
import calendar from "../../assets/icons/calendar.svg";
import history from "../../assets/icons/list.svg";
import user from "../../assets/icons/user.svg";

export default function MobileNav() {
  const location = useLocation();

  const links = [
    { name: "Home", icon: home, route: "/" },
    { name: "Booking", icon: calendar, route: "/booking" },
    { name: "History", icon: history, route: "/history" },
    { name: "Account", icon: user, route: "/account" },
  ];

  if (location.pathname !== "/booking" && location.pathname !== "/login") {
    // if (location.pathname !== "/login") {
    return (
      <nav className="mobilenav">
        <div className="mobilenav__wrapper">
          <nav className="mobilenav__bar">
            {links.map((link, index) => (
              <NavLink className="mobilenav__list" to={link.route} key={index}>
                <img className="mobilenav__icon" src={link.icon} />
              </NavLink>
            ))}
          </nav>
        </div>
      </nav>
    );
  }
  return null;
}
