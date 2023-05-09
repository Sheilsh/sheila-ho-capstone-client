import React, { useEffect } from "react";
import { useState } from "react";
import "./Parking.scss";

import car from "../../assets/images/car-parking.png";

export default function ParkingSpot({ id, number, booked, availableSpots }) {
  // console.log(id);
  const [selected, setSelected] = useState("");
  // const isBooked = booked > 0;
  const isAvailable = availableSpots.find((spot) => spot.id === id);

  const handleSelectParking = (e) => {
    if (e && e.target) {
      const spot = e.target.id;
      setSelected(spot);
      console.log(spot);
    }
  };

  return (
    <>
      <div className="parking__slot">
        {isAvailable ? (
          <p className="parking__spotstatus">Available</p>
        ) : (
          <p className="parking__spotstatus parking__spotstatus--booked">
            Booked
          </p>
        )}
        <div className="parking__visuals">
          {isAvailable ? (
            <p
              className="parking__spotname"
              onClick={handleSelectParking}
              id={id}
            >
              Empty
            </p>
          ) : (
            <img className="parking__carimg" src={car} alt="car image" />
          )}
        </div>
        <p>Spot {number}</p>
      </div>
    </>
  );
}
