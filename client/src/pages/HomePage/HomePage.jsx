import React from "react";
import "./HomePage.scss";
import banner from "../../assets/logo/logo_transparent.png";

export default function HomePage() {
  return (
    <>
      {/* <MobileNav />
      <NavBar /> */}
      <main className="homapage">
        <div className="homepage__wrapper">
          <img className="homepage__banner" src={banner} />
        </div>
      </main>
    </>
  );
}
