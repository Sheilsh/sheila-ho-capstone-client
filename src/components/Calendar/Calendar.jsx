import React from "react";
// import dayjs from "dayjs";
// import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import "./Calendar.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { theme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";

export default function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar__wrappper">
        <div className="calendar__container">
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar sx={{ width: "28rem", height: "30rem" }} />
              {/* <StaticDateTimePicker
                defaultValue={dayjs("2022-04-17T15:30")}
                sx={{ minWidth: "15rem", height: "50rem" }}
              /> */}
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
