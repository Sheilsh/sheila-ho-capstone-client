import React, { useState } from "react";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";
import BookingForm from "../BookingForm/BookingForm";

export default function Parking() {
  const [openModal, setOpenModal] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen((prevState) => !prevState);
  // };

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
                onClick={() => setOpenModal(true)}
              />
              <BookingForm open={openModal} />
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
