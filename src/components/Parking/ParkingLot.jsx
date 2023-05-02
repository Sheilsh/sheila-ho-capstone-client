import React from "react";
import { Link } from "react-router-dom";
import backarrow from "../../assets/icons/arrow_back_black_24dp.svg";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";

export default function ParkingLot() {
  return (
    <section className="parking">
      <div className="parking__wrapper">
        <div className="parking__container">
          <div className="parking__header">
            <Link to="/">
              <img src={backarrow} alt="back arrow icon" />
            </Link>
            <h1 className="parking__title">Choose Parking Space</h1>
          </div>
          <h3 className="parking__title">May 2, 2023</h3>
          <div className="parking__bookingcontain">
            {/* <ParkingSpot />
            <Button
              className="parking__confirm"
              type="submit"
              btnName="Confirm Booking"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
