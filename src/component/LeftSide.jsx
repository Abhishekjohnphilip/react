import logo from "../uploads/logo.png";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import RightSide from "./RightSide";

function LeftSide() {
  const navigate = useNavigate();

  return (
    <><div>
          <img src={logo} width={40} height={40} />
        </div>
      <div className=" left">
        
        <div className="length">
          <h1 className="">
            Welcome to <br /> Systempackage
          </h1>

          <Form>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="hellouser"
              />
              <div className="input-group-prepend">
                <select
                  className="input-group-text"
                  style={{ height: "40px", background: "white" }}
                >
                  <option>@heads.design</option>
                </select>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="btn-1 col-lg-12" onClick={() => navigate("/src/component/Otp.jsx")}>
              NEXT
            </Button>


            <br></br><a href="" className="frgtpwd">
              Forget the password?
            </a>
          </Form>
        </div>
      </div>
     
      <div className="right"> <RightSide /></div>
     
      <footer className="last">
        Not member? <a href="" className="CrtAcc">Create account</a>
      </footer>
    </>
  );
}


export default LeftSide;

