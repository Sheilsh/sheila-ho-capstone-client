import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addBooking } from "../../utils/helpers";

import "./BookingForm.scss";
import BookingForm from "./BookingForm";

export default function BookingFormAction({
  open,
  userData,
  spot,
  date,
  onClose,
}) {
  const plate = userData.license_plate;
  const navigate = useNavigate();

  const [selectedPlate, setSelectedPlate] = useState("");
  const [newPlate, setNewPlate] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");

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
    setStartTime(formattedDate.toLocaleString());
  }, [date]);

  useEffect(() => {
    const calculateEndTime = () => {
      if (duration && startTime) {
        const start = new Date(startTime);
        const end = new Date(start.getTime() + duration * 60 * 60 * 1000);
        setEndTime(end.toLocaleString());
      }
    };
    calculateEndTime();
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

    const formData = {
      parking_id: spot[0],
      plate_number: selectedPlate || newPlate,
      start_datetime: startTime,
      end_datetime: endTime,
    };

    try {
      await addBooking(formData);
      console.log("formData", formData);

      setNewPlate("");
      setSelectedPlate("");
      setDuration("");
      setError("");

      alert("Booking confirmed.");
      navigate(-1);
    } catch (error) {
      alert("Failed to confirm booking.");
    }

    e.target.reset();
  };

  const handlePlateChange = (e) => {
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
