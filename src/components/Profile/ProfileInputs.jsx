import React from "react";
import Input from "../Input/Input";

export default function ProfileInputs({
  userData,
  setName,
  setEmail,
  setPhoneNumber,
}) {
  const inputs = [
    {
      label: "Full Name",
      type: "text",
      content: userData ? userData.full_name : "",
      change: (e) => setName(e.target.value),
    },
    {
      label: "Email",
      type: "email",
      content: userData ? userData.email : "",
      change: (e) => setEmail(e.target.value),
    },
    {
      label: "Address",
      type: "text",
      content: userData ? `${userData.unit_number} - ${userData.address}` : "",
    },
    { label: "City", content: userData ? userData.city : "" },
    {
      label: "Phone Number",
      type: "tel",
      content: userData ? userData.phone_number : "",
      change: (e) => setPhoneNumber(e.target.value),
    },
  ];

  return (
    <>
      {inputs.map((item, index) => {
        return (
          <div className="user__inputbox" key={index}>
            <Input
              inputType={item.type}
              labelName={item.content}
              onChange={item.change}
              required
            />
          </div>
        );
      })}
    </>
  );
}
