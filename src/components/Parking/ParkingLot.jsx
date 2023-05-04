import React from "react";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";

export default function ParkingLot() {
  return (
    <section className="parking">
      <div className="parking__wrapper">
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <ParkingSpot />
            <Button
              className="parking__confirm"
              type="submit"
              btnName="Confirm Booking"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
