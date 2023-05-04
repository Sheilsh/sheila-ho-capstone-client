import React from "react";
import Parking from "../../components/Parking/Parking";
import Calendar from "../../components/Calendar/Calendar";
import TimeCard from "../../components/Calendar/TimeCard";
import Header from "../../components/Header/Header";

export default function Booking() {
  return (
    <>
      <Header />
      <Calendar />
      {/* <TimeCard /> */}
      <Parking />
    </>
  );
}
