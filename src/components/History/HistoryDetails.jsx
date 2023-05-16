import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBooking } from "../../utils/helpers";

import apiData from "../../services/axios";
import "./History.scss";
import Header from "../Header/Header";
import Button from "../Button/Button";

import DeleteModal from "../Modal/DeleteModal";
import HistoryMap from "./HistoryMap";

export default function HistoryDetails() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);
  const [isActiveBooking, setIsActiveBooking] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [snackBar, setSnackBar] = useState({ open: false, message: "" });

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

          const startDateTime = new Date(data.start_datetime);
          const endDateTime = new Date(data.end_datetime);
          const currentDateTime = new Date();
          const isActive =
            currentDateTime >= startDateTime && currentDateTime <= endDateTime;

          setIsActiveBooking(isActive);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteBooking(id);

      setSnackBar({ open: true, message: "Cancelled booking!" });
      setTimeout(() => {
        navigate("/history");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header headerName={"Booking Details"} linkTo={"/history"} />
        <div className="details__wrapper">
          <div className="details__container">
            <div className="details__info">
              <div className="details__infocontent">
                <h4 className="details__title">Booking ID:</h4>
                <p className="historycard__data">{id}</p>
              </div>
              <div className="details__infocontent">
                <h4 className="details__title">Location:</h4>
                <p className="details__data">Beaches</p>
              </div>
              <div className="details__infocontent">
                <h4 className="details__title">Spot Number:</h4>
                <p className="historycard__data">{bookingData.spot_number}</p>
              </div>
              <div className="details__infocontent">
                <h4 className="details__title">Plate:</h4>
                <p className="historycard__data">{bookingData.plate_number}</p>
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
            </div>
            <div className="details__cta">
              {isActiveBooking && (
                <Button
                  className="details__button"
                  btnName="Cancel Booking"
                  onClick={handleOpen}
                />
              )}
              {openModal && (
                <div>
                  <DeleteModal
                    open={openModal}
                    snackBar={snackBar}
                    handleClose={handleClose}
                    handleDelete={handleDelete}
                  />
                </div>
              )}
            </div>
            <hr />
            <HistoryMap />
          </div>
        </div>
      </>
    );
  }
}
