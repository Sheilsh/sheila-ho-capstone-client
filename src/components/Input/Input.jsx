import React from "react";
import "./Input.scss";

export default function Input({
  className,
  inputType,
  inputName,
  labelName,
  onChange,
}) {
  return (
    <div className="input__inputbox">
      <input
        className={className}
        type={inputType}
        name={inputName}
        onChange={onChange}
        required
      />
      <label className="input__info">{labelName}</label>
      <i></i>
    </div>
  );
}
