import React, { useState } from "react";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";
import BookingForm from "../BookingForm/BookingForm";
import location from "../../assets/icons/navigation.png";

export default function Parking() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="parking">
      <div className="parking__wrapper">
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <div className="parking__subheader">
              {/* <img
                className="parking__icon"
                src={location}
                alt="location icon"
              /> */}
              <h2 className="calendar__location">Pick Your Spot</h2>
            </div>
            <ParkingSpot />
            <div className="parking__cta">
              <Button
                className="parking__button"
                type="submit"
                btnName="Confirm Booking"
                onClick={() => setOpenModal(true)}
              />
              <BookingForm open={openModal} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
