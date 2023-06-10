import React from "react";
import "./Input.scss";

export default function Input({ inputType, inputName, labelName, onChange }) {
  return (
    <div className="input__inputbox">
      <input type={inputType} name={inputName} onChange={onChange} required />
      <label className="input__info">{labelName}</label>
      <i></i>
    </div>
  );
}
