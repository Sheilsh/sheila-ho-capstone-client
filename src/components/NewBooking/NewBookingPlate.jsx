import React, { useState, useEffect } from "react";
import { getBooking, getUserById, addPlateByUserId } from "../../utils/helpers";
import { useParams } from "react-router-dom";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function NewBookingPlate({ onBack, onNext, formData }) {
  const { id } = useParams();

  const [selectedPlate, setSelectedPlate] = useState("");
  const [newLicensePlate, setNewLicensePlate] = useState("");
  const [existingPlates, setExistingPlates] = useState([]);

  const handlePlateChange = (event) => {
    setSelectedPlate(event.target.value);
  };

  const handleNext = () => {
    const plateInfo = selectedPlate || newLicensePlate;
    onNext(formData.step1.spot, formData.step1.time, plateInfo);
  };

  // const handleNext = async () => {
  //   console.log("handleNext function called");
  //   try {
  //     if (selectedPlate) {
  //       const plateInfo = selectedPlate;
  //       console.log("Selected Plate:", plateInfo);
  //       onNext(formData.step1.spot, formData.step1.time, plateInfo);
  //     } else if (newLicensePlate) {
  //       const user = await getUserById(id);
  //       const userId = user.id;
  //       const newPlateData = { plate_number: newLicensePlate };
  //       await addPlateByUserId(userId, newPlateData);
  //       const plateInfo = newLicensePlate;
  //       console.log("New Plate:", plateInfo);
  //       onNext(formData.step1.spot, formData.step1.time, plateInfo);
  //     }
  //   } catch (error) {
  //     console.error("Error in handleNext:", error);
  //   }
  // };

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const user = await getUserById(id);
        setExistingPlates(user.license_plate);
      } catch (error) {
        console.error("Failed to fetch plates:", error);
      }
    };

    fetchPlates();
  }, []);

  return (
    <>
      <Header onClick={onBack} headerName="Booking" />
      <div className="newform">
        <div className="newform__wrapper">
          <div className="newform__container">
            <form className="newform__inputcontent">
              <div className="newform__header">
                <h2 className="newform__title">Select Vehicle</h2>
              </div>
              <div className="newform__inputbox">
                <select
                  className="newform__input form__input--selector"
                  name="plate"
                  value={selectedPlate}
                  onChange={handlePlateChange}
                >
                  <option value="">Select License Plate</option>
                  {existingPlates.map((plate, index) => (
                    <option key={index} value={plate.plate_number}>
                      {plate.plate_number}
                    </option>
                  ))}
                </select>
              </div>
              <p>OR</p>
              <div className="newform__header">
                <h2 className="newform__title">Add Vehicle</h2>
              </div>
              <Input
                inputType="text"
                inputName="license"
                labelName="Enter New License Plate"
                value={newLicensePlate}
                onChange={(event) => setNewLicensePlate(event.target.value)}
              />
              <div className="newform__cta">
                <Button
                  className="newform__button newform__button--confirm"
                  btnName="Continue"
                  onClick={handleNext}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}