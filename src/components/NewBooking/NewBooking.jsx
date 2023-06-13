import React, { useState, useEffect } from "react";
import { getBooking, getUserById } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import "./NewBooking.scss";

import BookingTime from "./NewBookingTime";
import Header from "../Header/Header";
import ParkingList from "../Parking/ParkingList";
import Button from "../Button/Button";

export default function NewBooking({ onNext }) {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  // const [userData, setUserData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [selectedParkingSpot, setSelectedParkingSpot] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    // getUserById(id).then((data) => {
    //   setUserData(data);
    // });

    getBooking().then((data) => {
      setBookingData(data);
      setLoading(false);
    });
  }, [id]);

  const handleParkingSpotSelection = (spot) => {
    setSelectedParkingSpot(spot); // Update with spot object directly
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (selectedParkingSpot && selectedTime) {
      onNext(selectedParkingSpot, selectedTime);
    } else {
      alert("Please select a parking spot and time before proceeding.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header linkTo={"/"} headerName={"Booking"} />
        <ParkingList
          // userData={userData}
          bookingData={bookingData}
          handleParkingSpotSelection={handleParkingSpotSelection}
        />

        <BookingTime
          onSelectTime={handleTimeSelection}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <div className="newbooking__cta">
          <Button btnName="Continue" onClick={handleNext} />
        </div>
      </>
    );
  }
}
