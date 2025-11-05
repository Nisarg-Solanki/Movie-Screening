import React from "react";
import { Navbar } from "./Navbar";
import "../CSS/SignUpUI.module.css";
import SignUpInputs from "./SignUpInputs";

const SignUpUI = () => {
  return (
    <>
      <Navbar />
      <SignUpInputs />
    </>
  );
};

export default SignUpUI;
