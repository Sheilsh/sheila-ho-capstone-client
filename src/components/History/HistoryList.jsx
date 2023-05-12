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
            <section className="history__content">
              <h1 className="history__header">Previous Bookings</h1>
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
                      end={booking.end_datetime}
                      spot={booking.spot_number}
                    />
                  );
                })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
