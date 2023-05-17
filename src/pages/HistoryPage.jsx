import React, { useState, useEffect } from "react";
import { getUserBooking } from "../utils/helpers";
import Header from "../components/Header/Header";
import HistoryList from "../components/History/HistoryList";

export default function HistoryPage() {
  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    getUserBooking().then((data) => {
      setBookingData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header linkTo={"/"} headerName={"Booking History"} />
        <HistoryList bookingData={bookingData} />
      </>
    );
  }
}
