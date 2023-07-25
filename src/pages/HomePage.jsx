import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById, getUserBooking } from "../utils/helpers";
import Home from "../components/Home/Home";

export default function HomePage() {
  const { id } = useParams();

  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [activeBooking, setActiveBooking] = useState(null);

  // -----  useEffect/ apiData -----
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const userData = await getUserById(id + `?timestamp=${Date.now()}`);
        setUserData(userData);

        const bookingData = await getUserBooking(
          id + `?timestamp=${Date.now()}`
        );
        const activeBooking = bookingData.find((booking) => {
          const endTime = new Date(booking.end_datetime).getTime();
          const currentTime = new Date().getTime();
          return currentTime < endTime;
        });
        setActiveBooking(activeBooking);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!userData) {
    return null;
  } else {
    return <Home key={id} userData={userData} activeBooking={activeBooking} />;
  }
}
