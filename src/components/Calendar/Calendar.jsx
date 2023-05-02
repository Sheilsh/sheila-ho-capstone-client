import React from "react";
import "./Calendar.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { theme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";

export default function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar__container">
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}
