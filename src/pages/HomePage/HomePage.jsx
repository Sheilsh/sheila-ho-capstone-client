import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import Button from "../../components/Button/Button";
import banner from "../../assets/logo/logo_transparent.png";
import { getUser } from "../../utils/helpers";

export default function HomePage() {
  const { id } = useParams();
  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  // -----  useEffect/ apiData -----
  useEffect(() => {
    getUser(id).then((data) => {
      // console.log("user data", data);
      setUserData(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    <div>Loading...</div>;
  } else {
    return (
      <>
        <main className="homepage">
          <div className="homepage__wrapper">
            <div className="homepage__container">
              <div className="homepage__bannercontain">
                <img className="homepage__banner" src={banner} />
              </div>
              <div className="homepage__content">
                <p className="homepage__title">Hello {userData.full_name}</p>
                <div className="homepage__active">
                  <p className="homepage__subtitle">Active Session</p>
                  <p className="homepage__time">Time Duration: 00:00</p>
                </div>
                <Button className="homepage__button" btnName="Book Now" />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
