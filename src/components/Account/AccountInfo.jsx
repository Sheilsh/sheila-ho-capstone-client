import React from "react";
import "./Account.scss";
import rightarrow from "../../assets/icons/chevron_right_20.svg";
import { NavLink } from "react-router-dom";

export default function AccountInfo({ userData }) {
  const list = [
    { name: "Profile", route: "/account/profile" },
    { name: "License Plate", route: "/account/plate" },
    { name: "About", route: "/account/about" },
    { name: "Contact Us", route: "/account/contact" },
    // { name: "Log Out", icon: logout, route: "/signup" },
  ];
  return (
    <>
      <main className="account">
        <div className="account__wrapper">
          <div className="account__container">
            <ul className="account__list">
              {list.map((link, index) => {
                return (
                  <NavLink className="account__link" to={link.route}>
                    <li className="account__item" key={index}>
                      <h2 className="account__title">{link.name}</h2>
                      <img
                        className="account__icon"
                        src={rightarrow}
                        alt="right arrow icon"
                      />
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </main>

      {/* <main className="account">
        <div className="account__wrapper">
          <div className="account__container">
            <ul className="account__list">
              <li className="account__item">
                <h2>Profile</h2>
                <img
                  className="account__icon"
                  src={rightarrow}
                  alt="right arrow icon"
                />
              </li>
              <li className="account__item">
                <h2>License Plate</h2>
                <img
                  className="account__icon"
                  src={rightarrow}
                  alt="right arrow icon"
                />
              </li>
              <li className="account__item">
                <h2>About</h2>
                <img
                  className="account__icon"
                  src={rightarrow}
                  alt="right arrow icon"
                />
              </li>
              <li className="account__item">
                <h2>Contact</h2>
                <img
                  className="account__icon"
                  src={rightarrow}
                  alt="right arrow icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </main> */}
    </>
  );
}
