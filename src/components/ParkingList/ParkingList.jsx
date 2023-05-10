import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getParking } from "../../utils/helpers";
import ParkingSpot from "./ParkingSpot";
import Button from "../Button/Button";
import BookingForm from "../BookingForm/BookingForm";
import ParkingCarousel from "./ParkingCarousel";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   slideMargin: 0,
  // };

  return (
    <section className="parking">
      <div className="parking__wrapper">
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <div className="parking__subheader">
              <h2 className="parking__title">Pick Available Spot</h2>
            </div>
            {/* <div className="parking__cardcontain"> */}
            {/* <Slider {...settings}> */}
            {/* <div className="parking__card"> */}
            {/* {parkingData
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
                })} */}
            {/* </div> */}
            {/* </Slider> */}
            {/* </div> */}
            <ParkingCarousel
              parkingData={parkingData}
              availableSpots={availableSpots}
              onSelect={handleSelectSpot}
            />
            <div className="parking__cta">
              <Button
                className="parking__button"
                type="submit"
                btnName="Book"
                onClick={() => setOpenModal(true)}
              />
              <BookingForm
                open={openModal}
                userData={userData}
                spot={selectedSpot}
                date={selectedDate}
                // onClose={() => setOpenModal(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
