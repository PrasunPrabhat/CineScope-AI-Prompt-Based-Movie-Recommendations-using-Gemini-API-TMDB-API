import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BG_URL } from "../utils/Constants/Constant";

const Login = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Header />
      <div className="w-full h-[100vh]">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Netflix Background"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
