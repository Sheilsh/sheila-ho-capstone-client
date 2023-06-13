import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Button from "../Button/Button";
import {
  addBooking,
  getUserBooking,
  addPlateByUserId,
} from "../../utils/helpers";

const calculateEndTime = (startTime, duration) => {
  if (!isNaN(duration)) {
    const endTime = new Date(startTime.getTime() + duration * 60 * 60 * 1000);
    const formattedDateString = `${endTime.getFullYear()}-${(
      endTime.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${endTime
      .getDate()
      .toString()
      .padStart(2, "0")} ${endTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${endTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${endTime.getSeconds().toString().padStart(2, "0")}`;
    return formattedDateString;
  } else {
    return "Invalid duration";
  }
};

export default function NewBookingDetails({
  onBack,
  onNext,
  userData,
  formData,
}) {
  const navigate = useNavigate();

  const plateId = userData.plate_id;
  const [errorMessage, setErrorMessage] = useState("");
  const [isPlateAdded, setIsPlateAdded] = useState(false);

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds()
    );
    const formattedDateString = `${formattedDate.getFullYear()}-${(
      formattedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${formattedDate
      .getDate()
      .toString()
      .padStart(2, "0")} ${formattedDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${formattedDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${formattedDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    return formattedDateString;
  };

  const makeBooking = async () => {
    try {
      const startTime = getCurrentDateTime();
      const endTime = calculateEndTime(
        new Date(startTime),
        parseInt(formData.step1.time)
      );

      const startDate = new Date(startTime);
      const userBookings = await getUserBooking(userData.id);

      // Filter the user's bookings for the current day
      const bookingsOnSameDay = userBookings.filter((booking) => {
        const bookingStartDate = new Date(booking.start_datetime);
        return bookingStartDate.toDateString() === startDate.toDateString();
      });

      if (bookingsOnSameDay.length > 0) {
        setErrorMessage("You have already booked a spot for today.");
        return;
      }

      const maxStartDate = new Date();

      if (startDate > maxStartDate) {
        setErrorMessage("You cannot book parking in advance.");
        return;
      }

      const bookingData = {
        user_id: userData.id,
        parking_id: formData.step1.spot.id,
        plate_id: plateId,
        plate_number: formData.step2.plateInfo,
        start_datetime: startTime,
        end_datetime: endTime,
      };

      await addBooking(bookingData);
      console.log("Booking successful:", bookingData);

      onNext();
    } catch (error) {
      console.error("Booking failed:", error);
      setErrorMessage("Failed to make a booking. Please try again.");
    }
  };

  console.log(formData);

  return (
    <>
      <Header onClick={onBack} headerName={"Parking Details"} />
      <div className="newform__wrapper newform__wrapper--details">
        <section className="newform__content">
          {/* <h2 className="newform__header newform__header--details">
            Parking Details
          </h2> */}
          <div className="newform__info">
            <div className="newform__confirmdetail">
              <h4 className="newform__item">Duration:</h4>
              <p className="newform__item"> {formData.step1.time}</p>
            </div>
            <div className="newform__confirmdetail">
              <h4 className="newform__item">Start Time:</h4>
              <p className="newform__item">{getCurrentDateTime()}</p>
            </div>
            <div className="newform__confirmdetail">
              <h4 className="newform__item"> End Time: </h4>
              <p className="newform__item">
                {calculateEndTime(
                  new Date(getCurrentDateTime()),
                  parseInt(formData.step1.time)
                )}
              </p>
            </div>
            <div className="newform__confirmdetail">
              <h4 className="newform__item">Location: </h4>
              <p className="newform__item">Beaches</p>
            </div>
            <div className="newform__confirmdetail">
              <h4 className="newform__item">Selected Spot:</h4>
              <p className="newform__item">{formData.step1.spot.number}</p>
            </div>
            <div className="newform__confirmdetail">
              <h4 className="newform__item">Plate Number:</h4>
              <p className="newform__item">{formData.step2.plateInfo}</p>
            </div>
          </div>
        </section>
        {errorMessage && <p className="newform__error">{errorMessage}</p>}
        <div className="newform__cta">
          <Button btnName="Confirm Booking" onClick={makeBooking} />
          <Button
            className="form__button"
            btnName="Cancel"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </>
  );
}
