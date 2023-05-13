import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./Booking.scss";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { theme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Parking from "../Parking/ParkingList";

export default function Booking({ userData, bookingData }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const dateChangeHandler = (e) => {
    const newDate = dayjs(e.$d);
    setSelectedDate(newDate.format("MM-DD-YYYY"));
  };

  return (
    <>
      <div className="calendar">
        <div className="calendar__wrappper">
          <div className="calendar__container">
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  sx={{ width: "28rem", height: "30rem" }}
                  value={dayjs(selectedDate)}
                  onChange={dateChangeHandler}
                />
              </LocalizationProvider>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <Parking
        userData={userData}
        bookingData={bookingData}
        selectedDate={selectedDate}
      />
    </>
  );
}
