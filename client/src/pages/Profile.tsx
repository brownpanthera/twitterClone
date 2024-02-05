import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  if (token) {
    localStorage.setItem("token", token);
  }

  return <div>Profile</div>;
};

export default Profile;
