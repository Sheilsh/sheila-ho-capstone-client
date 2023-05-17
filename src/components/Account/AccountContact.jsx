import React from "react";
import Header from "../Header/Header";

export default function Contact() {
  return (
    <>
      <Header linkTo={"/account"} headerName="Contact Us" />
      <main className="contact">
        <div className="contact__wrapper">
          <div className="contact__container">
            <section className="contact__content">
              <h2>Please Contact Us </h2>
              <div className="contact__contactinfo">
                <div className="contact__info">
                  <p>Email:</p>
                  <a href="info@shorepark.com">info@shorepark.com</a>
                </div>
                <div className="contact__info">
                  <p>Phone Number:</p>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
