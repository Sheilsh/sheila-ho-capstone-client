import React from "react";
import "./Login.scss";
import banner from "../../assets/logo/logo_transparent.png";

export default function LogIn() {
  return (
    <main className="login">
      <div className="login__wrapper">
        <div className="login__formcontain">
          <div className="login">
            <form action="/getstarted" className="form">
              <img src={banner} />
              <p>Please Sign In</p>
              <div className="input-box">
                <input typeOf="email" name="email" required />
                <label className="form__info">Email</label>
                <i></i>
              </div>
              <div class="input-box">
                <input typeOf="password" name="password" required />
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
      </div>
    </main>
  );
}

//  <div className="login">
//     <form action="/getstarted" className="form">
//       <h1>Log In</h1>
//       <p>Please Sign In</p>
//       <div className="input-box">
//         <input typeOf="email" name="email" required />
//         <label className="form__info">Email</label>
//         <i></i>
//       </div>
//       <div class="input-box">
//         <input typeOf="password" name="password" required />
//         <label className="form__info">Password</label>
//         <i></i>
//       </div>
//       <button className="btn">Submit</button>
//     </form>
//   </div>
