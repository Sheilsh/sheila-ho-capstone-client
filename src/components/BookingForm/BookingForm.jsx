import React, { useState } from "react";
import "./BookingForm.scss";
import Button from "../Button/Button";
import close from "../../assets/icons/clear_black_24dp.svg";

export default function BookingForm({ open, userData }) {
  if (!open) return null;
  const plate = userData.plate_number;

  // const [value, setValue] = useState(dayjs("2022-04-17T15:30"));

  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__container">
          <div className="form__header">
            <h1 className="form__title">Booking Information</h1>
            <div className="form__iconbox">
              <img className="form__icon" src={close} alt="close icon" />
            </div>
          </div>
          <section className="form__content">
            <div className="form__info">
              <p className="form__item">Date</p>
              <p className="form__item">Beaches Location</p>
              <p className="form__item">24 Hours</p>
            </div>
          </section>
          <hr />
          {/* <div id="error"></div> */}
          <form className="form__formcontent">
            <div className="form__inputbox">
              <select
                className="form__input form__input--selector"
                name="plate"
              >
                <option value="">Select License Plate</option>
                {plate.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {/* <span className="form__label form__label--select">
                Select License Plate
              </span> */}
            </div>
            <p>OR</p>
            <div className="form__inputbox">
              <input className="form__input" type="text" name="license" />
              <span className="form__label">Enter New License Plate</span>
            </div>
            <div className="form__inputbox">
              <input
                className="form__input form__input--time"
                type="datetime-local"
                name="time"
              />
              <span className="form__label">Choose a start time</span>
            </div>
            <div className="form__cta">
              <Button
                className="form__button"
                type="submit"
                btnName="Confirm"
              />
              <Button className="form__button" btnName="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
