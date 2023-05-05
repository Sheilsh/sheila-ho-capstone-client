import React, { useState } from "react";
import "./BookingForm.scss";
import Button from "../Button/Button";
import close from "../../assets/icons/clear_black_24dp.svg";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";

export default function BookingForm({ open }) {
  if (!open) return null;

  // const [value, setValue] = useState(dayjs("2022-04-17T15:30"));

  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__content">
          <div className="form__header">
            <h1 className="form__title">Booking Information</h1>
            <div className="form__iconbox">
              <img className="form__icon" src={close} alt="close icon" />
            </div>
          </div>
          {/* <div id="error"></div> */}
          <form className="form__formcontent">
            <div className="form__inputbox">
              {/* <label className="form__label" htmlFor="plate">
                Select License Plate:
              </label> */}
              <select className="form__input" name="plate">
                <option></option>
                <option value="ABC123">ABC123</option>
                <option value="ABC456">ABC456</option>
              </select>

              <span className="form__label form__label--select">
                Select License Plate
              </span>
            </div>
            <div className="form__inputbox">
              <input className="form__input" type="text" name="license" />
              <span className="form__label">Enter License Plate</span>
            </div>
            <div className="form__inputbox">
              <input
                className="form__input form__input--time"
                type="datetime-local"
                name="time"
              />
              <span className="form__label">Choose a start time</span>
            </div>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimeField
                label="Set a start time"
                // defaultValue={dayjs("2022-04-17T15:30")}
              />
            </LocalizationProvider> */}

            <Button className="form__button" type="submit" btnName="Submit" />
            <Button className="form__button" btnName="Cancel" />
          </form>
        </div>
      </div>
    </div>
  );
}
