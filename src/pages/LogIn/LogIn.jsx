import React from "react";
import "./LogIn.scss";
import banner from "../../assets/logo/logo_transparent.png";
import Footer from "../../components/Footer/Footer";

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
            <div className="login__content">
              <div className="input-box">
                <input type="email" name="email" required />
                <label className="form__info">Email</label>
                <i></i>
              </div>
              <div className="input-box">
                <input type="password" name="password" required />
                <label className="form__info">Password</label>
                <i></i>
              </div>
            </div>
            <div className="login__content">
              <button className="login__button login__button-login">
                Log In
              </button>
              <button className="login__button login__button-create">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
