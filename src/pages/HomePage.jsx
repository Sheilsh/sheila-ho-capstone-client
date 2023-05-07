import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../utils/helpers";
import Home from "../components/Home/Home";

export default function HomePage() {
  const { id } = useParams();

  // -----  state -----
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  // -----  useEffect/ apiData -----
  useEffect(() => {
    getUser(id).then((data) => {
      // console.log("user data", data);
      setUserData(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    <div>Loading...</div>;
  } else {
    return <Home userData={userData} />;
  }
}
