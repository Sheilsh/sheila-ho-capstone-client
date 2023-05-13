import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addBooking, getUserBooking } from "../../utils/helpers";

import "./BookingForm.scss";
import BookingForm from "./BookingForm";

export default function BookingFormAction({
  open,
  userData,
  spot,
  date,
  onClose,
}) {
  //   console.log(userData);
  const plate = userData.license_plate;
  const plateId = userData.plate_id;
  const navigate = useNavigate();
  //   console.log(plateId);

  const [selectedPlate, setSelectedPlate] = useState("");
  const [newPlate, setNewPlate] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const start = date ? new Date(date) : currentDate;
    const formattedDate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds()
    );
    // setStartTime(formattedDate.toLocaleString());
    const formattedDateString = `${formattedDate.getFullYear()}-${(
      formattedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${formattedDate
      .getDate()
      .toString()
      .padStart(2, "0")} ${formattedDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${formattedDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${formattedDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    setStartTime(formattedDateString);
  }, [date]);

  useEffect(() => {
    const calculateEndTime = () => {
      if (duration && startTime) {
        const start = new Date(startTime);
        const end = new Date(start.getTime() + duration * 60 * 60 * 1000);
        // setEndTime(end.toLocaleString());
        const formattedDateString = `${end.getFullYear()}-${(end.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${end.getDate().toString().padStart(2, "0")} ${end
          .getHours()
          .toString()
          .padStart(2, "0")}:${end
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${end.getSeconds().toString().padStart(2, "0")}`;
        setEndTime(formattedDateString);
      }
    };
    calculateEndTime();
    return () => {
      setEndTime("");
    };
  }, [duration, startTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedPlate && !newPlate) {
      setError("Please select an existing plate or enter a new one.");
      return;
    }

    if (!duration) {
      setError("Please select the duration.");
      return;
    }

    const startDate = new Date(startTime);
    const userBookings = await getUserBooking(userData.id);

    const bookingsOnSameDay = userBookings.filter((booking) => {
      const bookingStartDate = new Date(booking.start_datetime);
      return bookingStartDate.toDateString() === startDate.toDateString();
    });

    if (bookingsOnSameDay.length > 0) {
      setError("You have already booked a spot for today.");
      return;
    }

    const formData = {
      user_id: userData.id,
      parking_id: spot[0],
      plate_id: plateId,
      plate_number: newPlate || selectedPlate,
      start_datetime: startTime,
      end_datetime: endTime,
    };

    try {
      await addBooking(formData);

      setNewPlate("");
      setSelectedPlate("");
      setDuration("");
      setError("");

      setSuccess("Booking confirmed!");
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      alert("Failed to confirm booking.");
    }

    e.target.reset();
  };

  const handlePlateChange = (e) => {
    console.log(e.target.value);
    setSelectedPlate(e.target.value);
  };

  const handleNewPlateChange = (e) => {
    setNewPlate(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(Number(e.target.value));
  };

  if (!open) {
    return null;
  }
  return (
    <BookingForm
      startTime={startTime}
      endTime={endTime}
      duration={duration}
      error={error}
      success={success}
      plate={plate}
      selectedPlate={selectedPlate}
      newPlate={newPlate}
      onClose={onClose}
      spot={spot}
      handlePlateChange={handlePlateChange}
      handleNewPlateChange={handleNewPlateChange}
      handleDurationChange={handleDurationChange}
      handleSubmit={handleSubmit}
    />
  );
}
