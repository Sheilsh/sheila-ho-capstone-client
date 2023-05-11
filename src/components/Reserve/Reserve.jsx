import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./Reserve.scss";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { theme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import ParkingList from "../ParkingList/ParkingList";

export default function Reserve({ userData, bookingData }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const dateChangeHandler = (e) => {
    const newDate = dayjs(e.$d);
    setSelectedDate(newDate.format("MM-DD-YYYY"));

    // Perform additional actions or API calls based on the newDate
    console.log(newDate.format("MM-DD-YYYY"));
    // Example:
    // fetchBookingData(newDate).then((newData) => setData(newData));
    // add more code here instead to update the bottom component

    // using this "e" - event object, you're going to send an api call
    // to grab more data and display using the state
    // i.e. -> call setData(myNewData)
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
      <ParkingList
        userData={userData}
        bookingData={bookingData}
        selectedDate={selectedDate}
      />
    </>
  );
}
