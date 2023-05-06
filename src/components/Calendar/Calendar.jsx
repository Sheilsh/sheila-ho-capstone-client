import React, { useState } from "react";
import dayjs from "dayjs";
import "./Calendar.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { theme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";

export default function Calendar() {
  const [value, setValue] = useState(dayjs(new Date()));
  const [data, setData] = useState("");

  function dateChangeHandler(e) {
    setValue(e);
    // add more code here instead to update the bottom component
    console.log(e);
    // using this "e" - event object, you're going to send an api call
    // to grab more data and display using the state
    // i.e. -> call setData(myNewData)
  }

  return (
    <div className="calendar">
      <div className="calendar__wrappper">
        <div className="calendar__container">
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={value}
                onChange={dateChangeHandler}
                sx={{ width: "28rem", height: "30rem" }}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
