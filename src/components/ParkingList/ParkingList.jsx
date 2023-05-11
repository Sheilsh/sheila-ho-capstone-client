import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getParking } from "../../utils/helpers";
import Button from "../Button/Button";
import BookingForm from "../BookingForm/BookingForm";
import ParkingCarousel from "./ParkingCarousel";

export default function ParkingList({ userData, bookingData, selectedDate }) {
  const [parkingData, setParkingData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    getParking().then((data) => {
      // console.log("parking data", data);
      setParkingData(data);
    });
  }, []);

  const availableSpots = parkingData.filter((spot) => {
    const isAvailable = !bookingData.find((booking) => {
      const selectedDateStart = dayjs(selectedDate).startOf("day");
      const selectedDateEnd = dayjs(selectedDate).endOf("day");

      return (
        booking.spot_number === spot.spot_number &&
        dayjs(booking.end_datetime).isBetween(
          selectedDateStart,
          selectedDateEnd,
          null,
          "[]"
        )
      );
    });
    return isAvailable;
  });

  const handleSelectSpot = (id, number) => {
    setSelectedSpot([id, number]);
    setOpenModal(true);
  };

  return (
    <section className="parking">
      <div className="parking__wrapper">
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <div className="parking__subheader">
              <h2 className="parking__title">Pick Available Spot</h2>
            </div>
            <ParkingCarousel
              parkingData={parkingData}
              availableSpots={availableSpots}
              handleSelectSpot={handleSelectSpot}
            />
            <div className="parking__cta">
              {/* <Button
                className="parking__button"
                type="submit"
                btnName="Book"
                onClick={() => setOpenModal(true)}
              /> */}
              <BookingForm
                open={openModal}
                userData={userData}
                spot={selectedSpot}
                date={selectedDate}
                onClose={() => setOpenModal(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
