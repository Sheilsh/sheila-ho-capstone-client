import React from "react";
import "./History.scss";
import { Link } from "react-router-dom";
import map from "../../assets/images/beaches-map.png";

export default function HistoryCard({ id, start }) {
  const localStartDate = new Date(start).toLocaleDateString();

  return (
    <Link className="historycard__container" to={`/history/${id}/details`}>
      <div className="historycard__content">
        <div className="historycard__imagebox">
          <img
            className="historycard__img"
            src={map}
            alt="google maps of beaches"
          />
        </div>
        <div className="historycard__info">
          <div className="historycard__infocontent">
            <h4 className="historycard__title">Date:</h4>
            <p className="historycard__data">{localStartDate}</p>
          </div>
          <div className="historycard__infocontent">
            <h4 className="historycard__title">Booking ID:</h4>
            <p className="historycard__data">{id}</p>
          </div>
          <div className="historycard__infocontent">
            <h4 className="historycard__title">Location:</h4>
            <p className="historycard__data">Beaches</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
