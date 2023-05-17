import React from "react";

import close from "../../assets/icons/clear_black_24dp.svg";
import Button from "../Button/Button";
import "./BookingForm";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BookingForm({
  startTime,
  endTime,
  duration,
  error,
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
  const renderAlert = (type, message) => (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        severity={type}
        sx={{
          fontSize: {
            xs: "1.1rem",
            sm: "1.3rem",
          },
          color: "red",
          "& .MuiAlert-message": {
            padding: "10px 0",
          },
        }}
      >
        {message}
      </Alert>
    </Stack>
  );

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
          {error && renderAlert("error", error)}
          <section className="form__content">
            <div className="form__info">
              <p className="form__item">Date Selected: {startTime}</p>
              <p className="form__item">Location: Beaches</p>
              <p className="form__item">Selected: Spot {spot[1]}</p>
            </div>
            {duration !== 0 && (
              <div className="form__info">
                <p className="form__item">End Time: {endTime}</p>
              </div>
            )}
          </section>
          <hr />
          <form className="form__inputcontent" onSubmit={handleSubmit}>
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
                className="form__button form__button--confirm"
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
