import React, { useState, useEffect } from "react";
import { getBooking, getUser } from "../utils/helpers";
import { useParams } from "react-router-dom";
import Reserve from "../components/Reserve/Reserve";
import Header from "../components/Header/Header";

export default function BookingPage() {
  // call booking api here
  const { id } = useParams();

  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    getUser(id).then((data) => {
      console.log("user data", data);
      setUserData(data);
    });

    getBooking().then((data) => {
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
        <Reserve userData={userData} bookingData={bookingData} />
      </>
    );
  }
}
