import React from "react";
import dayjs from "dayjs";
import "./Booking.scss";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { theme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";

export default function BookingCalender({ selectedDate, dateChangeHandler }) {
  const disablePreviousDates = (date) => {
    return date.isBefore(dayjs().startOf("day"));
  };

  return (
    <div className="calendar">
      <div className="calendar__wrappper">
        <div className="calendar__container">
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                sx={{ width: "28rem", height: "30rem" }}
                value={dayjs(selectedDate)}
                onChange={dateChangeHandler}
                shouldDisableDate={disablePreviousDates}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
