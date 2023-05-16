import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../utils/helpers";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Forms.scss";

export default function LicensePlate() {
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
      <div className="form__container">
        <form className="form__inputcontent form__inputcontent--plate">
          <h2>Saved License Plate</h2>
          {plate.map((plate, index) => {
            return (
              // <div className="form__inputbox form__inputbox--plate" key={index}>
              <div className="login__inputbox" key={index}>
                <input
                  className="form__input form__input--plate"
                  type="text"
                  // defaultValue={plate.plate_number}
                  // onChange={item.change}
                  required
                />
                {/* <label className="form__label form__label--plate"> */}
                <label className="login__info">{plate.plate_number}</label>
                <i></i>
              </div>
            );
          })}
          <div className="form__cta form__cta--plate">
            <Button
              className="form__button form__buttom--plate"
              type="submit"
              btnName="Save"
            />
          </div>
        </form>
      </div>
    </>
  );
}
