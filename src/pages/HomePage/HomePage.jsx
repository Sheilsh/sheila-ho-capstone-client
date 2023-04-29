import React from "react";
import "./HomePage.scss";
import banner from "../../assets/logo/logo_transparent.png";

export default function HomePage() {
  return (
    <>
      {/* <MobileNav />
      <NavBar /> */}
      <main className="homepage">
        <div className="homepage__wrapper">
          <div className="homepage__container">
            <div className="homepage__bannercontain">
              <img className="homepage__banner" src={banner} />
            </div>
            <div className="homepage__content">
              <p className="homepage__title">Hello, User Name</p>
              <div className="homepage__active">
                <p className="homepage__subtitle">Active Session</p>
                <p className="homepage__time">Time Duration: 00:00</p>
              </div>
              <button className="homepage__button">Book Now</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
