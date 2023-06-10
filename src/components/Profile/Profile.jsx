import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById, editUser } from "../../utils/helpers";
import "./Profile.scss";

import Header from "../Header/Header";
import face from "../../assets/images/face_48.svg";
import Button from "../Button/Button";
import ProfileInputs from "./ProfileInputs";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    getUserById(id).then((data) => {
      setUserData(data);
      setName(data.full_name);
      setEmail(data.email);
      setPhoneNumber(data.phone_number);
    });
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedUserData = {
      full_name: name,
      email,
      phone_number: phoneNumber,
    };
    try {
      const data = await editUser(id, updatedUserData);
      setUserData(data);
      setSuccess("Profile updated!");
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header linkTo={"/account"} headerName={"Profile"} />
      <div className="user">
        <div className="user__wrapper">
          <div className="user__container">
            {success && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert
                  severity="success"
                  sx={{
                    fontSize: "1.1rem",
                    color: "green",
                    "& .MuiAlert-message": {
                      padding: "10px 0",
                    },
                  }}
                >
                  {success}
                </Alert>
              </Stack>
            )}
            <div className="user__info">
              {userData && (
                <form className="user__form" onSubmit={handleFormSubmit}>
                  <div className="user__content">
                    <div className="user__imagebox">
                      <img
                        className="user__picture"
                        src={face}
                        alt="face icon"
                      />
                    </div>
                    <ProfileInputs
                      userData={userData}
                      setName={setName}
                      setEmail={setEmail}
                      setPhoneNumber={setPhoneNumber}
                    />
                  </div>
                  <div className="user__cta">
                    <Button
                      className="user__button"
                      type="submit"
                      btnName="Save"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
