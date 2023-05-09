import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getParking } from "../../utils/helpers";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";
import BookingForm from "../BookingForm/BookingForm";

export default function Parking({ userData, bookingData, selectedDate }) {
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
      const bookingDate = dayjs(booking.end_datetime);
      const selectedDateStart = dayjs(selectedDate).startOf("day");
      return (
        booking.spot_number === spot.spot_number &&
        (bookingDate.isSame(selectedDateStart, "day") ||
          bookingDate.isAfter(selectedDateStart))
      );
    });
    return isAvailable;
  });

  const handleSelectSpot = (spot) => {
    setSelectedSpot(spot);
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
            <div className="parking__cardcontain">
              <div className="parking__card">
                {parkingData
                  .sort((a, b) => a.spot_number - b.spot_number)
                  .map((spot) => {
                    return (
                      <ParkingSpot
                        key={spot.id}
                        id={spot.id}
                        number={spot.spot_number}
                        availableSpots={availableSpots}
                        onSelect={handleSelectSpot}
                      />
                    );
                  })}
              </div>
            </div>
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
