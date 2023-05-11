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
              <h1>History</h1>
              {bookingData.map((booking) => {
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
