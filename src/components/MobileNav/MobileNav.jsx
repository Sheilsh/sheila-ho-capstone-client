import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";
import home from "../../assets/icons/home.svg";
import calendar from "../../assets/icons/calendar.svg";
import history from "../../assets/icons/list.svg";
import user from "../../assets/icons/user.svg";
// import logout from "../../assets/icons/log-out.svg";

export default function MobileNav() {
  const [active, setActive] = useState(0);

  const links = [
    { name: "Home", icon: home, route: "/" },
    { name: "Booking", icon: calendar, route: "/booking" },
    { name: "History", icon: history, route: "/history" },
    { name: "Account", icon: user, route: "/account" },
  ];

  return (
    <nav className="mobilenav">
      <div className="mobilenav__wrapper">
        <nav className="mobilenav__bar">
          {links.map((link, index) => (
            <div
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              key={index}
            >
              <Link to={link.route}>
                <img className="mobilenav__icon" src={link.icon} />
              </Link>
            </div>
          ))}
          {/* <div
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
          </div> */}
        </nav>
      </div>
    </nav>
  );
}
