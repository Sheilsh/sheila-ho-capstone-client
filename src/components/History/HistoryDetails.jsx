import React from "react";
import "./History.scss";
import Header from "../Header/Header";

export default function HistoryDetails({ id }) {
  console.log("id", id);
  return (
    <>
      <Header headerName={"Booking Details"} linkTo={"/history"} />
      <h1>Booking {id} </h1>
    </>
  );
}
