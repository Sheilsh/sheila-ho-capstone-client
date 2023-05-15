import React from "react";
import "./History.scss";
import HistoryCard from "./HistoryCard";

export default function HistoryList({ bookingData }) {
  return (
    <>
      <div className="history">
        <div className="history__wrapper">
          <div className="history__container">
            {/* <section className="history__content">
              <h1>Active Sessions</h1>
            </section> */}
            <div className="history__content">
              {bookingData
                .sort(
                  (a, b) =>
                    new Date(b.start_datetime) - new Date(a.start_datetime)
                )
                .map((booking) => {
                  return (
                    <HistoryCard
                      key={booking.id}
                      id={booking.id}
                      start={booking.start_datetime}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
