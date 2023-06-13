import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../utils/helpers";

import NewBooking from "../components/NewBooking/NewBooking";
import NewBookingPlate from "../components/NewBooking/NewBookingPlate";
import NewBookingDetails from "../components/NewBooking/NewBookingDetails";
import NewBookingFinished from "../components/NewBooking/NewBookingFinished";

export default function MultiStepForm() {
  const { id } = useParams();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserById(id).then((data) => {
      setUserData(data);
    });
  }, [id]);

  const handleNext = (selectedSpot, selectedTime, plateInfo) => {
    setFormData((prevData) => ({
      ...prevData,
      [`step${step}`]: {
        spot: selectedSpot,
        time: selectedTime,
        plateInfo: plateInfo,
      },
    }));

    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <NewBooking onNext={handleNext} />;
      case 2:
        return (
          <NewBookingPlate
            onBack={handleBack}
            onNext={handleNext}
            formData={formData}
          />
        );
      case 3:
        return (
          <NewBookingDetails
            onBack={handleBack}
            onNext={handleNext}
            userData={userData}
            formData={formData}
          />
        );
      case 4:
        return <NewBookingFinished onBack={handleBack} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}
