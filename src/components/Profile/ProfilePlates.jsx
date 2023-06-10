import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../utils/helpers";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function ProfilePlates() {
  const { id } = useParams();
  const [plate, setPlate] = useState([]);

  useEffect(() => {
    getUserById(id).then((data) => {
      setPlate(data.license_plate);
    });
  }, [id]);

  return (
    <>
      <Header linkTo={"/account"} headerName="License Plates" />
      <div className="user__container">
        <form className="user__form">
          {plate.map((plate, index) => {
            return (
              <div className="user__inputbox login__inputbox" key={index}>
                <Input
                  inputType="text"
                  labelName={plate.plate_number}
                  required
                />
              </div>
            );
          })}
          <div className="user__cta ">
            <Button className="user__button" type="submit" btnName="Save" />
          </div>
        </form>
      </div>
    </>
  );
}
