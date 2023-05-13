import React from "react";
import { useLocation } from "react-router-dom";
import "./History.scss";
import Header from "../Header/Header";
import Button from "../Button/Button";

export default function HistoryDetails({}) {
  const location = useLocation();
  console.log(location);
  if (!location.state || !location.state.booking) {
    return <div>Loading...</div>;
  }
  const { id, start, end, spot, plate } = location.state;
  //   const { id, start, end, spot, plate } = booking;

  return (
    <>
      <Header headerName={"Booking Details"} linkTo={"/history"} />
      <div className="details__wrapper">
        <div className="details__info">
          <div className="details__infocontent">
            <h4 className="details__title">Booking ID:</h4>
            <p className="historycard__data">{id}</p>
          </div>
          <div className="details__infocontent">
            <h4 className="details__title">Location:</h4>
            <p className="details__data">Beaches Location</p>
          </div>
          <div className="details__infocontent">
            <h4 className="details__title">Start:</h4>
            {/* <p className="historycard__data">{start}</p> */}
          </div>
          <div className="details__infocontent">
            <h4 className="details__title">End:</h4>
            {/* <p className="historycard__data"> {end}</p> */}
          </div>
          <div className="details__infocontent">
            <h4 className="details__title">Spot:</h4>
            {/* <p className="historycard__data">{spot}</p> */}
          </div>
          <div className="details__infocontent">
            <h4 className="details__title">Plate:</h4>
            {/* <p className="historycard__data">{plate}</p> */}
          </div>
        </div>
        <Button className="details__button" btnName="Delete" />
      </div>
    </>
  );
}
