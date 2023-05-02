import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../../utils/helpers";
import Button from "../../components/Button/Button";
import banner from "../../assets/logo/logo_transparent.png";
import "./HomePage.scss";

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
              <div className="homepage__header">
                <img className="homepage__banner" src={banner} />
                <h1 className="homepage__title">Hello {userData.full_name}</h1>
              </div>
              <div className="homepage__content">
                <div className="homepage__active">
                  <p className="homepage__subtitle">Active Session</p>
                  <p className="homepage__time">Time Duration: 00:00</p>
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
}
