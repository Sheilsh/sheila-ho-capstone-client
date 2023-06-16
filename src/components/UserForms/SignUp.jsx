import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/logo/logo_small_transparent.png";
import Button from "../Button/Button";
import Input from "../Input/Input";

import { signup } from "../../utils/helpers";

export default function SignUp() {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUnitNumber, setRegisterUnitNumber] = useState("");
  const [registerAddress, setRegisterAddress] = useState("");
  const [registerCity, setRegisterCity] = useState("");
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
  const [isSignupError, setIsSignupError] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = {
      full_name: registerName,
      unit_number: registerUnitNumber,
      address: registerAddress,
      city: registerCity,
      phone_number: registerPhoneNumber,
      email: registerEmail,
      password: registerPassword,
    };

    try {
      const response = await signup(formData);
      const { name, email, password, unit, address, city, phone } = response;
      setRegisterName(name);
      setRegisterEmail(email);
      setRegisterPassword(password);
      setRegisterUnitNumber(unit);
      setRegisterAddress(address);
      setRegisterCity(city);
      setRegisterPhoneNumber(phone);
    } catch (error) {
      setIsSignupError(true);
      console.error("Error during signup:", error);
    }
  };

  return (
    <main className="userform">
      <div className="userform__wrapper">
        <div className="userform__formcontain">
          <form action="/" className="userform__form" onSubmit={handleSignup}>
            <div className="userform__bannercontain userform__bannercontain--signup">
              <img
                className="userform__banner userform__banner--signup"
                src={banner}
                alt="Banner"
              />
            </div>
            <div className="userform__content userform__content--signup">
              <div className="userform__details">
                <Input
                  inputType="text"
                  inputName="full_name"
                  labelName="Full Name"
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>
              <div className="userform__details">
                <Input
                  inputType="number"
                  inputName="unit_number"
                  labelName="Unit Number"
                  onChange={(e) => setRegisterUnitNumber(e.target.value)}
                />
                <Input
                  inputType="text"
                  inputName="address"
                  labelName="Address"
                  onChange={(e) => setRegisterAddress(e.target.value)}
                />
                <Input
                  inputType="text"
                  inputName="city"
                  labelName="City"
                  onChange={(e) => setRegisterCity(e.target.value)}
                />
              </div>
              <div className="userform__details">
                <Input
                  inputType="tel"
                  inputName="phone_number"
                  labelName="Phone Number"
                  onChange={(e) => setRegisterPhoneNumber(e.target.value)}
                />
                <Input
                  inputType="email"
                  inputName="email"
                  labelName="Email"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <Input
                  inputType="password"
                  inputName="password"
                  labelName="Password"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="userform__cta">
              <Button
                className="userform__button"
                btnName="Create Account"
                onClick={handleSignup}
              />
              <Link to="/login">
                <Button className="userform__button" btnName="Back" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
