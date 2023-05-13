import React from "react";

import close from "../../assets/icons/clear_black_24dp.svg";
import erroricon from "../../assets/icons/error-24px.svg";
import Button from "../Button/Button";
import "./BookingForm.scss";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BookingForm({
  startTime,
  endTime,
  duration,
  error,
  success,
  plate,
  selectedPlate,
  newPlate,
  onClose,
  spot,
  handlePlateChange,
  handleNewPlateChange,
  handleDurationChange,
  handleSubmit,
}) {
  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__container">
          <div className="form__header">
            <h1 className="form__title">Booking Information</h1>
            <div className="form__iconbox">
              <img
                className="form__icon"
                src={close}
                alt="close icon"
                onClick={onClose}
              />
            </div>
          </div>
          {success && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert
                severity="success"
                sx={{ fontSize: "1.1rem", color: "green" }}
              >
                {success}
              </Alert>
            </Stack>
          )}
          {error && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error" sx={{ fontSize: "1.1rem", color: "red" }}>
                {error}
              </Alert>
            </Stack>
          )}
          <section className="form__content">
            <div className="form__info">
              <p className="form__item">Date Selected: {startTime}</p>
              <p className="form__item">Beaches Location</p>
              <p className="form__item">Selected: Spot {spot[1]}</p>
            </div>
            {duration !== 0 && (
              <div className="form__info">
                <p className="form__item">End Time: {endTime}</p>
              </div>
            )}
            {/* {error && (
              <div className="error">
                {" "}
                <img className="error__icon" src={erroricon} alt="error icon" />
                {error}
              </div>
            )} */}
          </section>
          <hr />
          <form className="form__formcontent" onSubmit={handleSubmit}>
            <div className="form__inputbox">
              <select
                className="form__input form__input--selector"
                name="plate"
                value={selectedPlate}
                onChange={handlePlateChange}
              >
                <option value="">Select License Plate</option>
                {plate.map((item, index) => (
                  <option key={index} value={`${item.plate_number}`}>
                    {`${item.plate_number}`}
                  </option>
                ))}
              </select>
            </div>
            <p>OR</p>
            <div className="form__inputbox">
              <input
                className="form__input"
                type="text"
                name="license"
                value={newPlate}
                onChange={handleNewPlateChange}
              />
              <span className="form__label">Enter New License Plate</span>
            </div>
            <div className="form__inputbox">
              <select
                className="form__input form__input--selector"
                name="duration"
                value={duration}
                onChange={handleDurationChange}
              >
                <option>Select Duration</option>
                <option value={1}>1 Hour</option>
                <option value={2}>2 Hours</option>
                <option value={3}>3 Hours</option>
                <option value={24}>24 Hours</option>
              </select>
            </div>
            <div className="form__cta">
              <Button
                className="form__button"
                type="submit"
                btnName="Confirm"
              />
              <Button
                className="form__button"
                btnName="Cancel"
                onClick={onClose}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
