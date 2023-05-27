import React from "react";
import img1 from "../../asset/slide.jpeg";
import "./Banner.css";

function Centerpages() {
  return (
    <div className="banner">
      <div className="slide ">
        <img src={img1} alt="img" />
      </div>
      <div className="content">
        <h4>30%OFF</h4>
        <h2 className="fw-bolder">WHEN BUYING PARTS </h2>
        <h2 className="fw-bolder"> WITH INSTALLATION</h2>
        <br></br>
        <h6 className="text-muted">Installation Of Parts in the Services Of</h6>
        <h6 className="text-muted"> Our Partners.</h6>
      </div>
      <button className="btnn">Shop Now</button>
      <div className="d-flex circle-d">
        <div className="circle mx-2 " ></div>
        <div className="circle-1 mx-2"></div>
        <div className="circle-1 mx-2"></div>
      </div>
    </div>
  );
}

export default Centerpages;
