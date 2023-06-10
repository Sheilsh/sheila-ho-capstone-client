import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserForm.scss";
import banner from "../../assets/logo/logo_transparent.png";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Input from "../Input/Input";

import { login } from "../../utils/helpers";

export default function Login() {
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      login(loginEmail, loginPassword).then((response) => {
        console.log(data);
      });
      // Call the login API endpoint or login logic here
      // If the login is successful, navigate to the next page
    } catch (error) {
      setIsLoginError(true);
      setErrorMessage("Error during login"); // Update the error message as needed
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <main className="login">
        <div className="userform__wrapper">
          <div className="userform__formcontain">
            <form action="/" className="userform__form" onSubmit={handleLogin}>
              <div className="userform__bannercontain">
                <img className="userform__banner" src={banner} alt="Banner" />
              </div>

              <div className="userform__content">
                <Input
                  inputType="email"
                  inputName="email"
                  labelName="Email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <Input
                  inputType="password"
                  inputName="password"
                  labelName="Password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <div className="userform__content">
                <Button className="userform__button" btnName="Log In" />
                <Link to="/signup">
                  <Button
                    className="userform__button"
                    btnName="Create Account"
                  />
                </Link>
              </div>
              {isLoginError && <label className="error">{errorMessage}</label>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
