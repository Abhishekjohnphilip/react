import React from "react";
import image from "../uploads/image_2023-03-21_22-30-18.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function RightSide() {
  return (
    <div className="right-side" >
      <Card>
        <Card.Img variant="top"  src={image}  width={100} height={180}/>
        <Card.Body style={{background:"#0858f7"}}>
          <div>
          <Button variant="dark">New</Button>
          <h3 style={{color:"white"}}>Developer handoff improvements</h3>
          <p style={{color:"white"}}>You'll now see a highlight around Symbols on the Canvas and in the Inspector.</p>
          <br/>
          <br/>
          <br/>
          <Link style={{color:"white",marginLeft:"300px",textDecoration:"none"}}>Share</Link>
          </div>
        </Card.Body>
      </Card>
      <br />
     
    </div>
  );
}


export default RightSide;