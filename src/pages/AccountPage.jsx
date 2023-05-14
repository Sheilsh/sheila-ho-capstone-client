import React from "react";
import Header from "../components/Header/Header";
import AccountInfo from "../components/Account/AccountInfo";

export default function AccountPage() {
  return (
    <>
      <Header linkTo={"/"} headerName="My Account" />
      <AccountInfo />
    </>
  );
}
