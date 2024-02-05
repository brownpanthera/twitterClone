import React from "react";
import axios from "axios";

const Home = () => {
  async function googleSignIn() {
    window.open("http://localhost:5000/auth/google", "_self");
  }
  return (
    <div>
      <h1>homepage</h1>
      <button onClick={googleSignIn}>google sign in</button>
    </div>
  );
};

export default Home;
