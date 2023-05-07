import React, { useState, useEffect } from "react";
import { getBookingById } from "../utils/helpers";
import { useParams } from "react-router-dom";
import Parking from "../components/Parking/Parking";
import Calendar from "../components/Calendar/Calendar";
import Header from "../components/Header/Header";

export default function Booking() {
  // call booking api here
  const { id } = useParams();

  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    getBookingById(id).then((data) => {
      console.log("booking data", data);
      setBookingData(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    <div>Loading...</div>;
  } else {
    return (
      <>
        <Header />
        <Calendar bookingData={bookingData} />
        <Parking bookingData={bookingData} />
      </>
    );
  }
}
