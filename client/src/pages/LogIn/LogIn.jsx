import React from "react";
import "./LogIn.scss";
import banner from "../../assets/logo/logo_transparent.png";

export default function LogIn() {
  return (
    <main className="login">
      <div className="login__wrapper">
        <div className="login__formcontain">
          <form action="/" className="login__form">
            <div className="login__bannercontain">
              <img className="login__banner" src={banner} />
            </div>
            {/* <p>Please Sign In</p> */}
            <div className="input-box">
              <input typeof="email" name="email" required />
              <label className="form__info">Email</label>
              <i></i>
            </div>
            <div className="input-box">
              <input typeof="password" name="password" required />
              <label className="form__info">Password</label>
              <i></i>
            </div>
            <button className="login__button login__button-login">
              Log In
            </button>
            <button className="login__button login__button-create">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
