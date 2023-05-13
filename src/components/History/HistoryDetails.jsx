import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiData from "../../services/axios";
import "./History.scss";
import Header from "../Header/Header";
import Button from "../Button/Button";

export default function HistoryDetails() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);
  console.log(bookingData);

  function formatDateTime(dateTime) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDateTime = new Date(dateTime).toLocaleString(
      "en-US",
      options
    );
    return formattedDateTime;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const bookingResponse = await apiData.get(`/booking/${id}`);
          const data = bookingResponse.data;
          setBookingData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header headerName={"Booking Details"} linkTo={"/history"} />
        <div className="details__wrapper">
          <div className="details__info">
            <div className="details__infocontent">
              <h4 className="details__title">Booking ID:</h4>
              <p className="historycard__data">{id}</p>
            </div>
            <div className="details__infocontent">
              <h4 className="details__title">Location:</h4>
              <p className="details__data">Beaches Location</p>
            </div>
            <div className="details__infocontent">
              <h4 className="details__title">Start:</h4>
              <p className="historycard__data">
                {formatDateTime(bookingData.start_datetime)}
              </p>
            </div>
            <div className="details__infocontent">
              <h4 className="details__title">End:</h4>
              <p className="historycard__data">
                {formatDateTime(bookingData.end_datetime)}
              </p>
            </div>
            <div className="details__infocontent">
              <h4 className="details__title">Spot:</h4>
              <p className="historycard__data">{bookingData.spot_number}</p>
            </div>
            <div className="details__infocontent">
              <h4 className="details__title">Plate:</h4>
              <p className="historycard__data">{bookingData.plate_number}</p>
            </div>
          </div>
          <Button className="details__button" btnName="Delete" />
        </div>
      </>
    );
  }
}
