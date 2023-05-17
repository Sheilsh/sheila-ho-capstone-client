import React, { useEffect } from "react";
import { useState } from "react";
import "./Parking.scss";

import car from "../../assets/images/transport.png";

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
              className="parking__spotfield"
              onClick={handleSelectParking}
              number={number}
            >
              <p className="parking__number">{number}</p>
            </p>
          ) : (
            <p
              className="parking__spotfield"
              onClick={handleSelectParking}
              number={number}
            >
              <img className="parking__carimg" src={car} alt="car image" />
            </p>
          )}
        </div>
      </div>
    </>
  );
}
