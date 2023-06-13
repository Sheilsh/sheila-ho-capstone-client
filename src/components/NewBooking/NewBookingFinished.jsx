import React from "react";
import Button from "../Button/Button";
import check from "../../assets/images/check-mark.png";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function NewBookingFinished({ onBack }) {
  return (
    <>
      <Header onClick={onBack} headerName={"Booking"} />
      <div className="newform__finish">
        <div className="newform__finishinfo">
          <h1>Your parking spot is booked</h1>
          <img
            className="newform__finishimg"
            src={check}
            alt="check mark confirm"
          />
        </div>
        <div className="newform__cta">
          <Link to={"/history"}>
            <Button btnName="View Booking Details" />
          </Link>
        </div>
      </div>
    </>
  );
}
