import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { getParking } from "../../utils/helpers";
import Button from "../Button/Button";
import BookingFormAction from "../BookingForm/BookingFormAction";
import ParkingCarousel from "./ParkingCarousel";

export default function ParkingList({ userData, bookingData, selectedDate }) {
  let navigate = useNavigate();
  const [parkingData, setParkingData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);
  // const [availableSpotCount, setAvailableSpotCount] = useState(0);

  // console.log(availableSpotCount);

  useEffect(() => {
    getParking().then((data) => {
      // console.log("parking data", data);
      setParkingData(data);
    });

    // getAvailableSpotCount().then((count) => {
    //   setAvailableSpotCount(count);
    // });
  }, []);

  const availableSpots = parkingData.filter((spot) => {
    const isAvailable = !bookingData.find((booking) => {
      const selectedDateStart = dayjs(selectedDate).startOf("day");
      const selectedDateEnd = dayjs(selectedDate).endOf("day");
      const bookingStart = dayjs(booking.start_datetime);
      const bookingEnd = dayjs(booking.end_datetime);

      // Check if the booking overlaps with today and tomorrow
      return (
        booking.spot_number === spot.spot_number &&
        (bookingStart.isBetween(
          selectedDateStart,
          selectedDateEnd,
          null,
          "[]"
        ) ||
          bookingEnd.isBetween(
            selectedDateStart,
            selectedDateEnd,
            null,
            "[]"
          ) ||
          (bookingStart.isBefore(selectedDateStart) &&
            bookingEnd.isAfter(selectedDateEnd)))
      );
    });
    return isAvailable;
  });

  const handleSelectSpot = (id, number) => {
    setSelectedSpot([id, number]);
    setOpenModal(true);
  };

  // const handleOnClose = () => {
  //   setOpenModal(false);
  //   navigate("/booking");
  // };

  return (
    <section className="parking">
      <div className="parking__wrapper">
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <div className="parking__subheader">
              <h2 className="parking__title">Pick Available Spot</h2>
              {/* <div>Available spots: {availableSpotCount}</div> */}
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
              <BookingFormAction
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
