import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./Booking.scss";

import Parking from "../Parking/ParkingList";
import BookingCalender from "./BookingCalender";

export default function Booking({ userData, bookingData }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const dateChangeHandler = (e) => {
    const newDate = dayjs(e.$d);
    setSelectedDate(newDate.format("MM-DD-YYYY"));
  };

  return (
    <>
      <BookingCalender
        selectedDate={selectedDate}
        dateChangeHandler={dateChangeHandler}
      />
      <Parking
        userData={userData}
        bookingData={bookingData}
        selectedDate={selectedDate}
      />
    </>
  );
}
