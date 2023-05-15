import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../utils/helpers";
import Header from "../Header/Header";

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
      <div className="plate__wrapper">
        <div className="plate__container">
          <h3>Saved License Plate</h3>
          <ul className="plate__content">
            {plate.map((plate, index) => {
              return (
                <li className="plate__number" key={index}>
                  {plate.plate_number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
