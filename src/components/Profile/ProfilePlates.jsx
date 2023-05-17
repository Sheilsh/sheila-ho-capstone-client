import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../utils/helpers";
import Header from "../Header/Header";
import Button from "../Button/Button";

export default function ProfilePlates() {
  const { id } = useParams();
  const [plate, setPlate] = useState([]);

  useEffect(() => {
    getUserById(id).then((data) => {
      console.log(data.license_plate);
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
                <input className="user__input" type="text" required />
                <label className="user__info login__info">
                  {plate.plate_number}
                </label>
                <i></i>
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
