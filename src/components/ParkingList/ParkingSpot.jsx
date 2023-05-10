import React, { useEffect } from "react";
import { useState } from "react";
import "./Parking.scss";

import car from "../../assets/images/car-parking.png";

export default function ParkingSpot({ id, number, availableSpots, onSelect }) {
  const [selected, setSelected] = useState("");
  const isAvailable = availableSpots.find((spot) => spot.id === id);

  const handleSelectParking = () => {
    if (isAvailable) {
      setSelected(id);
      onSelect(id, number);
    }
  };

  return (
    <>
      <div className="parking__spot">
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
              number={number}
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
