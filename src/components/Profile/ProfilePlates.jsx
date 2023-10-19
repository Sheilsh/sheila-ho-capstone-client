import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../utils/helpers";
import Header from "../Header/Header";
import Input from "../Input/Input";

import editIcon from "../../assets/icons/edit_note.svg";
import addIcon from "../../assets/icons/add.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import "./Profile.scss";

export default function ProfilePlates() {
  const { id } = useParams();
  const [plates, setPlates] = useState([]);
  const [isEditing, setIsEditing] = useState([]);

  useEffect(() => {
    getUserById(id).then((data) => {
      setPlates(data.license_plate);
      setIsEditing(Array(data.license_plate.length).fill(false));
    });
  }, [id]);

  const toggleEdit = (index) => {
    setIsEditing((prevEditing) => {
      const updatedEditing = [...prevEditing];
      updatedEditing[index] = !updatedEditing[index];
      return updatedEditing;
    });
  };

  const deletePlate = (index) => {
    setPlates((prevPlates) => {
      const updatedPlates = [...prevPlates];
      updatedPlates.splice(index, 1);
      return updatedPlates;
    });
    setIsEditing((prevEditing) => {
      const updatedEditing = [...prevEditing];
      updatedEditing.splice(index, 1);
      return updatedEditing;
    });
  };

  return (
    <>
      <Header linkTo="/account" headerName="License Plates" />
      <div className="user__container">
        <form className="user__form">
          {plates.map((plate, index) => (
            <div className="user__inputbox login__inputbox" key={index}>
              {isEditing[index] ? (
                <Input
                  inputType="text"
                  labelName={plate.plate_number}
                  required
                />
              ) : (
                <span>{plate.plate_number}</span>
              )}
              <div className="user__button-group">
                <button
                  type="button"
                  onClick={() => toggleEdit(index)}
                  className="user__action"
                >
                  {isEditing[index] ? (
                    <img className="user__icon" src={addIcon} alt="Save" />
                  ) : (
                    <img className="user__icon" src={editIcon} alt="Edit" />
                  )}
                </button>
                {!isEditing[index] && (
                  <button
                    type="button"
                    onClick={() => deletePlate(index)}
                    className="user__action"
                  >
                    <img className="user__icon" src={deleteIcon} alt="Delete" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
