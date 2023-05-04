import React from "react";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";

export default function Parking() {
  return (
    <section className="parking">
      <div className="parking__wrapper">
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <ParkingSpot />
            <div className="parking__cta">
              <Button
                className="parking__button"
                type="submit"
                btnName="Book"
              />
              <Button
                className="parking__button"
                type="submit"
                btnName="Cancel"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
