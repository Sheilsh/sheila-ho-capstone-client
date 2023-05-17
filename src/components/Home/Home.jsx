import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import banner from "../../assets/logo/logo_transparent.png";
import "./Home.scss";

export default function HomePage({ userData, activeBooking }) {
  const [timer, setTimer] = useState("00:00");

  useEffect(() => {
    if (activeBooking) {
      const interval = setInterval(() => {
        const endTime = new Date(activeBooking.end_datetime).getTime();
        const currentTime = new Date().getTime();
        const remainingTime = endTime - currentTime;
        if (remainingTime <= 0) {
          clearInterval(interval);
          setTimer("00:00:00");
        } else {
          const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
          const remainingMinutes = Math.floor(
            (remainingTime / (1000 * 60)) % 60
          );
          const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
          setTimer(
            `${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`
          );
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimer("00:00");
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
              <div className="homepage__info">
                <div className="homepage__section">
                  {activeBooking ? (
                    <div className="homepage__location">
                      <p className="homepage__subtitle">Active Session</p>
                      <p className="homepage__text homepage__text--location">
                        Beaches Location
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeBooking ? (
                    <p className="homepage__text">Time Duration: {timer}</p>
                  ) : (
                    <p className="homepage__subtitle">No Active Sessions</p>
                  )}
                </div>
                <hr />
                <div className="homepage__section">
                  <div className="homepage__userinfo">
                    <div className="homepage__usercontent">
                      <h4 className="homepage__text homepage__text--usertitle">
                        Address:
                      </h4>
                      <p className="homepage__text homepage__text--useritem">
                        {userData.address}, {userData.city}
                      </p>
                    </div>
                    <div className="homepage__usercontent">
                      <h4 className="homepage__text homepage__text--usertitle">
                        Unit:
                      </h4>
                      <p className="homepage__text homepage__text--useritem">
                        {userData.unit_number}
                      </p>
                    </div>
                  </div>
                </div>
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
