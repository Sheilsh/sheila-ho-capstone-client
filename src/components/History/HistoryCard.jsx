import React from "react";
import "./History.scss";
import { Link } from "react-router-dom";

export default function HistoryCard({ id, start }) {
  function formatDate(start) {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(start).toLocaleString(undefined, options);
    const [weekday, rest] = formattedDate.split(", ");
    const [month, day] = rest.split(" ");
    const { hours, minutes, ampm } = getTimeComponents(start);
    const fullDate = `${month} ${day}`;
    const time = `${hours}:${minutes} ${ampm}`;
    return { weekday, fullDate, time };
  }

  function getTimeComponents(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return { hours: formattedHours, minutes, ampm };
  }

  const localStartDate = formatDate(new Date(start));

  return (
    <Link className="historycard__container" to={`/history/${id}/details`}>
      <div className="historycard__content">
        <div className="historycard__datebox">
          <p className="historycard__date historycard__date--weekday">
            {localStartDate.weekday}
          </p>
          <p className="historycard__date historycard__date--fulldate">
            {localStartDate.fullDate}
          </p>
        </div>
        <div className="historycard__info">
          <div className="historycard__infocontent">
            <h4 className="historycard__title">Booking ID:</h4>
            <p className="historycard__data">{id}</p>
          </div>
          <div className="historycard__infocontent">
            <h4 className="historycard__title">Location:</h4>
            <p className="historycard__data">Beaches</p>
          </div>
          <div className="historycard__infocontent">
            <h4 className="historycard__title">Start Time:</h4>
            <p className="historycard__date">{localStartDate.time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
