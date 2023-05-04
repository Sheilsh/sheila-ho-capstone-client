import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import backarrow from "../../assets/icons/arrow_back_black_24dp.svg";

export default function Header({ linkTo, headerName }) {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__container">
          <div className="header__header">
            <Link to="/">
              <img
                className="header__icon"
                src={backarrow}
                alt="back arrow icon"
              />
            </Link>
            <h1 className="header__title">Choose Parking Space</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
