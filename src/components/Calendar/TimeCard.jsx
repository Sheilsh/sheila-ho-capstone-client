import React from "react";

export default function CalendarCard({ onSelectTimeSlot }) {
  return (
    <>
      <div className="timeslot">
        <div className="timeslot__wrapper">
          <section className="timeslot__content">
            <h1>Please Pick A Time Slot</h1>
            <div className="timeslot__times">
              <ul>
                {/* <li>12:00am -</li>
                <li></li>
                <li></li>
                <li></li> */}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
