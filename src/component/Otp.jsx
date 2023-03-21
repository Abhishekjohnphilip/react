import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../uploads/logo.png";
import OTP from "../uploads/OTP.PNG";
import { Component } from "react";
import RightSide from "./RightSide";



function Otp() {

  const navigate = useNavigate();
  return (
    <><div>
      <div>
        <img src={logo} width={40} height={40} />
      </div>
      <div className="first">
        <h1>
          Enter the verification <br />
          code to continue
        </h1>
        <div>
          We sent to hellouser@heads.design. If you <br />
          don't see it, check your spam.
        </div>
      </div>
      <img className="Otp-img" src={OTP} width={400} height={50} /><br />



      <>
        <button
          color="primary"
          type="button"
          className="btn btn-link btn-back"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </>
      <button
        type="button"
        onClick={() => navigate("/src/component/sucess.jsx")}
        className="btn btn-link btn-resend"
      >
        Resend
      </button>
    </div><div className="right"> <RightSide /></div></>

  );
  }
export default Otp;