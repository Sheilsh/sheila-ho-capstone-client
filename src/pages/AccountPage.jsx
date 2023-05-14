import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../utils/helpers";
import Header from "../components/Header/Header";
import AccountInfo from "../components/Account/AccountInfo";

export default function AccountPage() {
  const { id } = useParams();
  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser(id).then((data) => {
      setUserData(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header linkTo={"/"} headerName={userData.full_name} />
        <AccountInfo userData={userData} />
      </>
    );
  }
}
