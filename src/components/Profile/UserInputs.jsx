import React from "react";
import "./Profile.scss";

export default function UserInputs({
  userData,
  setName,
  setEmail,
  setPhoneNumber,
}) {
  const inputs = [
    {
      label: "Full Name",
      content: userData ? userData.full_name : "",
      change: (e) => setName(e.target.value),
    },
    {
      label: "Email",
      content: userData ? userData.email : "",
      change: (e) => setEmail(e.target.value),
    },
    {
      label: "Address",
      content: userData ? `${userData.unit_number} - ${userData.address}` : "",
    },
    { label: "City", content: userData ? userData.city : "" },
    {
      label: "Phone Number",
      content: userData ? userData.phone_number : "",
      change: (e) => setPhoneNumber(e.target.value),
    },
  ];

  return (
    <>
      {inputs.map((item, index) => {
        return (
          <div className="user__inputbox form__inputbox" key={index}>
            <input
              className="user__input form__input"
              type="text"
              name={item.label}
              defaultValue={item.content}
              onChange={item.change}
              required
            />
            <span className="form__label">{item.label}</span>
          </div>
        );
      })}
    </>
  );
}
