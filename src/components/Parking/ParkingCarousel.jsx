import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ParkingSpot from "./ParkingSpot";
import "./Parking.scss";

export default function ParkingCarousel({
  parkingData,
  availableSpots,
  handleSelectSpot,
}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // slideMargin: 0,
    // centerMode: true,
    centerPadding: "20%",
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {parkingData
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
        })}
    </Slider>
  );
}
