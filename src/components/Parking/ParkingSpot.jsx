import React from "react";
import { useState } from "react";
import "./Parking.scss";

import car from "../../assets/images/car.png";

export default function ParkingSpot() {
  const [isBooked, setIsBooked] = useState(false);

  const handleToggleStatus = () => {
    setIsBooked(!isBooked);
  };

  return (
    <>
      <div className="parking__cardcontain">
        <div className="parking__card parking__card--one">
          <div className="parking__slot">
            {isBooked ? (
              <p className="parking__spotstatus parking__spotstatus--booked">
                Booked
              </p>
            ) : (
              <p className="parking__spotstatus">Available</p>
            )}
            <div className="parking__visuals" onClick={handleToggleStatus}>
              {isBooked ? (
                <img className="parking__carimg" src={car} alt="car image" />
              ) : (
                <p className="parking__spotname">Empty</p>
              )}
            </div>
            <p>Spot 1</p>
          </div>

          <div className="parking__slot">
            {isBooked ? (
              <p className="parking__spotstatus parking__spotstatus--booked">
                Booked
              </p>
            ) : (
              <p className="parking__spotstatus">Available</p>
            )}
            <div className="parking__visuals" onClick={handleToggleStatus}>
              {isBooked ? (
                <img className="parking__carimg" src={car} alt="car image" />
              ) : (
                <p className="parking__spotname">Empty</p>
              )}
            </div>
            <p>Spot 2</p>
          </div>

          <div className="parking__slot">
            {isBooked ? (
              <p className="parking__spotstatus parking__spotstatus--booked">
                Booked
              </p>
            ) : (
              <p className="parking__spotstatus">Available</p>
            )}
            <div className="parking__visuals" onClick={handleToggleStatus}>
              {isBooked ? (
                <img className="parking__carimg" src={car} alt="car image" />
              ) : (
                <p className="parking__spotname">Empty</p>
              )}
            </div>
            <p>Spot 3</p>
          </div>

          <div className="parking__slot">
            {isBooked ? (
              <p className="parking__spotstatus parking__spotstatus--booked">
                Booked
              </p>
            ) : (
              <p className="parking__spotstatus">Available</p>
            )}
            <div className="parking__visuals" onClick={handleToggleStatus}>
              {isBooked ? (
                <img className="parking__carimg" src={car} alt="car image" />
              ) : (
                <p className="parking__spotname">Empty</p>
              )}
            </div>
            <p>Spot 4</p>
          </div>

          <div className="parking__slot">
            {isBooked ? (
              <p className="parking__spotstatus parking__spotstatus--booked">
                Booked
              </p>
            ) : (
              <p className="parking__spotstatus">Available</p>
            )}
            <div className="parking__visuals" onClick={handleToggleStatus}>
              {isBooked ? (
                <img className="parking__carimg" src={car} alt="car image" />
              ) : (
                <p className="parking__spotname">Empty</p>
              )}
            </div>
            <p>Spot 5</p>
          </div>
        </div>
      </div>
    </>
  );
}
