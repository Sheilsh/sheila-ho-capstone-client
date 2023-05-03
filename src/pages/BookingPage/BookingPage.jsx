import React from "react";
import BookingParkingLot from "../../components/Parking/ParkingLot";
import Calendar from "../../components/Calendar/Calendar";
import TimeCard from "../../components/Calendar/TimeCard";

export default function Booking() {
  return (
    <>
      <Calendar />
      <TimeCard />
      {/* <BookingParkingLot /> */}
    </>
  );
}
