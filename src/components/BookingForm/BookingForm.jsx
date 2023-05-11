import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { addBooking } from "../../utils/helpers";
import close from "../../assets/icons/clear_black_24dp.svg";
import erroricon from "../../assets/icons/error-24px.svg";
import Button from "../Button/Button";
import "./BookingForm.scss";

export default function BookingForm({ open, userData, spot, date, onClose }) {
  // console.log("date in form", date);
  const plate = userData.license_plate;
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [newPlate, setNewPlate] = useState([]);
  const [selectedPlate, setSelectedPlate] = useState("");

  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(new Date().toLocaleString());
  const [endTime, setEndTime] = useState("");

  console.log("start time", startTime);

  //--- function to calculating date time ----
  // const setInitialStartTime = (selectedDate) => {
  //   const currentDate = new Date();
  //   const formattedDate = selectedDate
  //     ? new Date(selectedDate + " " + currentDate.toLocaleTimeString())
  //     : currentDate;
  //   setStartTime(formattedDate.toLocaleString());
  // };
  const setInitialStartTime = (selectedDate) => {
    const currentDate = new Date();
    const start = selectedDate ? new Date(selectedDate) : currentDate;
    const formattedDate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds()
    );
    setStartTime(formattedDate.toLocaleString());
  };

  useEffect(() => {
    setInitialStartTime(date);
  }, [date]);

  const calculateEndTime = (duration) => {
    const start = new Date(startTime);
    const end = new Date(start.getTime() + duration * 60 * 60 * 1000);
    return end.toLocaleString();
  };

  //--- function to handle input field change ----

  const handleChange = (e) => {
    setDuration(Number(e.target.value));
    setEndTime(calculateEndTime(Number(e.target.value)));
  };

  //--- function to submti form ----

  const resetInput = () => {
    setNewPlate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the current date
    const currentDate = date;

    // Check if the selected date matches the current date
    if (date !== currentDate) {
      setError("You can only make a booking for the current date.");
      return;
    }

    if (!selectedPlate || !newPlate) {
      setError("Please select an existing plate or enter a new one.");
      return;
    }

    if (!duration) {
      setError("Please select the duration.");
      return;
    }

    console.log("Plate:", selectedPlate || newPlate);
    console.log("Start time:", startTime);
    console.log("End time:", new Date(endTime).toLocaleString());

    const formData = {
      parking_id: spot[0],
      plate_number: selectedPlate || newPlate,
      start_datetime: startTime,
      end_datetime: endTime,
    };

    try {
      await addBooking(formData);
      console.log("formDAta", formData);

      resetInput();

      alert("Booking confirmed.");
      navigate(-1);
    } catch (error) {
      alert("Failed to confirm booking.");
    }
    e.target.reset();
  };

  if (!open) {
    return null;
  }

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
          <section className="form__content">
            <div className="form__info">
              <p className="form__item">Date Selected: {startTime}</p>
              <p className="form__item">Beaches Location</p>
              <p className="form__item">Selected: Spot {spot[1]}</p>
            </div>
            {duration !== 0 && (
              <div className="form__info">
                {/* <p className="form__item">Start Time: {startTime}</p> */}
                <p className="form__item">End Time: {endTime}</p>
              </div>
            )}
            {error && (
              <div className="error">
                {" "}
                <img className="error__icon" src={erroricon} alt="error icon" />
                {error}
              </div>
            )}
          </section>
          <hr />
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
                onChange={(e) => setNewPlate(e.target.value)}
              />
              <span className="form__label">Enter New License Plate</span>
            </div>
            <div className="form__inputbox">
              <select
                className="form__input form__input--selector"
                name="duration"
                value={duration}
                onChange={handleChange}
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
