import React, { useState, useEffect } from "react";
import { getBooking, getUserById } from "../utils/helpers";
import { useParams } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Header from "../components/Header/Header";

export default function BookingPage() {
  const { id } = useParams();

  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    getUserById(id).then((data) => {
      setUserData(data);
    });

    getBooking().then((data) => {
      setBookingData(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    <div>Loading...</div>;
  } else {
    return (
      <>
        <Header linkTo={"/"} headerName={"Beaches"} />
        <Booking userData={userData} bookingData={bookingData} />
      </>
    );
  }
}
