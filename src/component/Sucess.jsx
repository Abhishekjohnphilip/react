import React from "react";
import logo from "../uploads/logo.png";

function Sucess(){
    return (
        <div className="sucess">
            <img src={logo} width={40} height={40} style={{marginLeft:"10%"}}  />
            <h2 style={{color:"blue"}}>Success!</h2>
        </div>
    );
}

export default Sucess;