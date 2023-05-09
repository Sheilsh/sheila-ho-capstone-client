import React, { useState } from "react";
import dayjs from "dayjs";
import "./BookingForm.scss";
import Button from "../Button/Button";
import close from "../../assets/icons/clear_black_24dp.svg";

export default function BookingForm({ open, userData }) {
  if (!open) return null;
  const plate = userData.plate_number;

  const [selectedPlate, setSelectedPlate] = useState("");
  const [newPlate, setNewPlate] = useState("");
  const [startTime, setStartTime] = useState(
    dayjs().format("YYYY-MM-DDTHH:mm")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPlate && !newPlate) {
      alert("Please select an existing plate or enter a new one.");
      return;
    }
    if (!startTime) {
      alert("Please choose a start time.");
      return;
    }
    console.log("Plate:", selectedPlate || newPlate);
    console.log("Start time:", startTime);
    // TODO: Add form submission logic here

    e.target.reset();
  };

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
              <p className="form__item">{startTime}</p>
              <p className="form__item">Beaches Location</p>
              {/* <p className="form__item">24 Hours</p> */}
            </div>
          </section>
          <hr />
          {/* <div id="error"></div> */}
          <form className="form__formcontent" onSubmit={handleSubmit}>
            <div className="form__inputbox">
              <select
                className="form__input form__input--selector"
                name="plate"
                value={selectedPlate}
                onChange={(e) => setSelectedPlate(e.target.value)}
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
              <input
                className="form__input"
                type="text"
                name="license"
                value={newPlate}
                onChange={(e) => setNewPlate(e.target.value)}
              />
              <span className="form__label">Enter New License Plate</span>
            </div>
            <div className="form__inputbox">
              <input
                className="form__input form__input--time"
                type="datetime-local"
                name="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
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
