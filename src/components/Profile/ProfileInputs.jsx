import React from "react";

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
          <div className="user__inputbox login__inputbox" key={index}>
            <input
              className="user__input"
              type={item.type}
              name={item.label}
              onChange={item.change}
              required
            />
            <label className="user__info login__info">{item.content}</label>
            <i></i>
          </div>
        );
      })}
    </>
  );
}
