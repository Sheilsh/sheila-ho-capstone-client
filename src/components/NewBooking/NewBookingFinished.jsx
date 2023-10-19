import React, { useState, useEffect } from "react";
import { getUserBooking } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import check from "../../assets/images/check-mark.png";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function NewBookingFinished({ onBack }) {
  const { id } = useParams();

  const [bookingData, setBookingData] = useState({});

  useEffect(() => {
    getUserBooking(id)
      .then((data) => {
        setBookingData(data);
      })
      .catch((error) => {
        console.error(error);
        setBookingData([]);
      });
  }, [id]);

  const convertToLocaleString = (utcDateTimeString) => {
    const utcDateTime = new Date(utcDateTimeString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDateTime = utcDateTime.toLocaleString("en-US", options);
    return formattedDateTime;
  };

  let currentBooking = null;
  if (Array.isArray(bookingData)) {
    if (bookingData.length > 0) {
      currentBooking = bookingData.reduce((current, booking) => {
        if (!current || booking.end_datetime > current.end_datetime) {
          return booking;
        }
        return current;
      });
    }
  } else {
    currentBooking = bookingData;
  }

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
        <section>
          <h4 className="newform__end--text">Your booking ends on:</h4>
          <p className="newform__end--time">
            {currentBooking &&
              convertToLocaleString(currentBooking.end_datetime)}
          </p>
        </section>
        <div className="newform__cta">
          <Link to={"/history"}>
            <Button btnName="View Booking Details" />
          </Link>
        </div>
      </div>
    </>
  );
}
