import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById, getUserBooking } from "../utils/helpers";
import Home from "../components/Home/Home";

export default function HomePage() {
  const { id } = useParams();

  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [activeBooking, setActiveBooking] = useState(null);

  // -----  useEffect/ apiData -----
  useEffect(() => {
    getUserById(id).then((data) => {
      setUserData(data);
      setLoading(false);
    });

    getUserBooking(id).then((data) => {
      const activeBooking = data.find((booking) => {
        const endTime = new Date(booking.end_datetime).getTime();
        const currentTime = new Date().getTime();
        return currentTime < endTime;
      });
      setActiveBooking(activeBooking);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return <Home userData={userData} activeBooking={activeBooking} />;
  }
}
