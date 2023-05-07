import React, { useEffect } from "react";
import { useState } from "react";
import "./Parking.scss";

import car from "../../assets/images/car-parking.png";

export default function ParkingSpot({ id, number, booked }) {
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (booked === 1) {
      setIsBooked(!isBooked);
    }
  }, []);

  // const handleToggleStatus = () => {
  //   setIsBooked(!isBooked);
  // };

  return (
    <>
      <div className="parking__slot">
        {isBooked ? (
          <p className="parking__spotstatus parking__spotstatus--booked">
            Booked
          </p>
        ) : (
          <p className="parking__spotstatus">Available</p>
        )}
        <div className="parking__visuals">
          {isBooked ? (
            <img className="parking__carimg" src={car} alt="car image" />
          ) : (
            <p className="parking__spotname">Empty</p>
          )}
        </div>
        <p>Spot {number}</p>
      </div>
    </>
  );
}
