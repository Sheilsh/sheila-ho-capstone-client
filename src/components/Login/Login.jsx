import React from "react";
import "./Login.scss";
import banner from "../../assets/logo/logo_transparent.png";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

export default function Login() {
  return (
    <>
      <main className="login">
        <div className="login__wrapper">
          <div className="login__formcontain">
            <form action="/" className="login__form">
              <div className="login__bannercontain">
                <img className="login__banner" src={banner} alt="Banner" />
              </div>
              <div className="login__content">
                <div className="login__inputbox">
                  <input type="email" name="email" required />
                  <label className="login__info">Email</label>
                  <i></i>
                </div>
                <div className="login__inputbox">
                  <input type="password" name="password" required />
                  <label className="login__info">Password</label>
                  <i></i>
                </div>
              </div>
              <div className="login__content">
                <Button className="login__button" btnName="Log In" />
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
