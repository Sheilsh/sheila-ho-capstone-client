import React, { useEffect, useState } from "react";
import { getParking } from "../../utils/helpers";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";
import BookingForm from "../BookingForm/BookingForm";

export default function Parking({ bookingData }) {
  // const [loading, setLoading] = useState(true);
  const [parkingData, setParkingData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getParking().then((data) => {
      console.log("parking data", data);
      setParkingData(data);
      // setLoading(false);
    });
  }, []);

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
                        booked={spot.is_booked}
                        number={spot.spot_number}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="parking__cta">
              <Button
                className="parking__button"
                type="submit"
                btnName="Book"
                onClick={() => setOpenModal(true)}
              />
              <BookingForm open={openModal} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
