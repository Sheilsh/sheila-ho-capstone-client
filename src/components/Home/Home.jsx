import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import banner from "../../assets/logo/logo_transparent.png";
import "./Home.scss";

export default function HomePage({ userData, activeBooking }) {
  // const [timer, setTimer] = useState(null);

  // useEffect(() => {
  //   if (activeBooking) {
  //     const interval = setInterval(() => {
  //       const endTime = new Date(activeBooking.end_datetime).getTime();
  //       const currentTime = new Date().getTime();
  //       const remainingTime = endTime - currentTime;
  //       if (remainingTime <= 0) {
  //         clearInterval(interval);
  //         setTimer(null);
  //       } else {
  //         const remainingSeconds = Math.floor(
  //           (remainingTime % (1000 * 60)) / 1000
  //         );
  //         const remainingMinutes = Math.floor(
  //           (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  //         );
  //         const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
  //         setTimer(
  //           `${remainingHours.toString().padStart(2, "0")}h ${remainingMinutes
  //             .toString()
  //             .padStart(2, "0")}m ${remainingSeconds
  //             .toString()
  //             .padStart(2, "0")}s`
  //         );
  //       }
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [activeBooking]);
  const [timer, setTimer] = useState("00:00");

  useEffect(() => {
    if (activeBooking) {
      const interval = setInterval(() => {
        const endTime = new Date(activeBooking.end_datetime).getTime();
        const currentTime = new Date().getTime();
        const remainingTime = endTime - currentTime;
        if (remainingTime <= 0) {
          clearInterval(interval);
          setTimer("00:00");
        } else {
          const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
          const remainingMinutes = Math.floor(
            (remainingTime / (1000 * 60)) % 60
          );
          const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
          setTimer(
            `${remainingHours.toString().padStart(2, "0")}:${remainingMinutes
              .toString()
              .padStart(2, "0")}:${remainingSeconds
              .toString()
              .padStart(2, "0")}`
          );
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimer("00:00"); // Initialize the timer with default value
    }
  }, [activeBooking]);

  return (
    <>
      <main className="homepage">
        <div className="homepage__wrapper">
          <div className="homepage__container">
            <div className="homepage__header">
              <img className="homepage__banner" src={banner} />
              <h1 className="homepage__title">Hello {userData.full_name}</h1>
            </div>
            <div className="homepage__content">
              <div className="homepage__active">
                <p className="homepage__subtitle">Active Session</p>
                {activeBooking ? (
                  <div className="homepage__location">
                    <p>Beaches Location</p>
                  </div>
                ) : (
                  ""
                )}
                {activeBooking ? (
                  <p className="homepage__time">Time Duration: {timer}</p>
                ) : (
                  <p className="homepage__time">No Active Sessions</p>
                )}
                {/* <p className="homepage__subtitle">Active Session</p>
                <p className="homepage__time">Time Duration: {timer}</p> */}
              </div>
              <Link to="/booking">
                <Button className="homepage__button" btnName="Book Now" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
