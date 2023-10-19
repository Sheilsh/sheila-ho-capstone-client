import React from "react";
import "./Parking.scss";
import car from "../../assets/images/transport.png";

export default function ParkingSpot({
  id,
  number,
  availableSpots,
  selectedSpot,
  onSelect,
}) {
  const isAvailable = availableSpots.some(
    (spot) => spot.spot_number === number
  );

  const handleSelectParking = () => {
    if (isAvailable) {
      onSelect({ id, number });
    }
  };

  return (
    <div className="parking__spot">
      {isAvailable ? (
        <p className="parking__spotstatus">Available</p>
      ) : (
        <p className="parking__spotstatus parking__spotstatus--booked">
          Booked
        </p>
      )}
      <div
        className={`parking__visuals parking__spotfield ${
          selectedSpot === id ? "parking__spotfield--selected" : ""
        }`}
        onClick={handleSelectParking}
      >
        {isAvailable ? (
          <p className="parking__number">{number}</p>
        ) : (
          <img className="parking__carimg" src={car} alt="car image" />
        )}
      </div>
    </div>
  );
}
