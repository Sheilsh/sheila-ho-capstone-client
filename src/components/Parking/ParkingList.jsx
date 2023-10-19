import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getParking } from "../../utils/helpers";
import ParkingCarousel from "./ParkingCarousel";

export default function ParkingList({
  bookingData,
  handleParkingSpotSelection,
}) {
  const [parkingData, setParkingData] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    getParking().then((data) => {
      setParkingData(data);
    });
  }, []);

  const availableSpots = parkingData.filter((spot) => {
    const isAvailable = !bookingData.find((booking) => {
      const bookingEnd = dayjs(booking.end_datetime);
      const bookingSessionOver = dayjs().isAfter(bookingEnd);

      return booking.spot_number === spot.spot_number && !bookingSessionOver;
    });
    return isAvailable;
  });

  const handleSpotSelection = (spot) => {
    setSelectedSpot(spot);
    handleParkingSpotSelection(spot);
  };

  return (
    <div className="parking">
      <section className="parking__wrapper">
        <h2 className="parking__header">Beaches Location</h2>
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <div className="parking__subheader">
              <h2 className="parking__title">Select Available Spot</h2>
            </div>
            <ParkingCarousel
              parkingData={parkingData}
              availableSpots={availableSpots}
              handleSelectSpot={handleSpotSelection}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
