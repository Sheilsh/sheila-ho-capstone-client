import React, { useState } from "react";
import "./NewBooking.scss";

export default function BookingTime({ selectedTime, setSelectedTime }) {
  const handleButtonClick = (value) => {
    setSelectedTime(value);
  };

  return (
    <div className="time">
      <div className="time__wrapper">
        <div className="time__container">
          <h2>How long?</h2>
        </div>
        <div className="time__info">
          <input
            className={`time__content ${
              selectedTime === "1 Hour" ? "active" : ""
            }`}
            type="button"
            value="1 Hour"
            onClick={() => handleButtonClick("1 Hour")}
          />
          <input
            className={`time__content ${
              selectedTime === "2 Hours" ? "active" : ""
            }`}
            type="button"
            value="2 Hours"
            onClick={() => handleButtonClick("2 Hours")}
          />
          <input
            className={`time__content ${
              selectedTime === "3 Hours" ? "active" : ""
            }`}
            type="button"
            value="3 Hours"
            onClick={() => handleButtonClick("3 Hours")}
          />
          <input
            className={`time__content ${
              selectedTime === "24 Hours" ? "active" : ""
            }`}
            type="button"
            value="24 Hours"
            onClick={() => handleButtonClick("24 Hours")}
          />
        </div>
      </div>
    </div>
  );
}
