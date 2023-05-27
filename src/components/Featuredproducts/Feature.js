import React from "react";
import { feature_brand } from "../constant";
import "./Feature.css";
import cart from "../../asset/svg/cart-20.svg"
import quick from "../../asset/svg/quickview.svg"

const Feature = () => {
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
        <p className="fw-bolder h5">Featured Products</p>
        <div className="nav-pro mb-3">
            <div className="slanted sl2 ">
            <span className="px-2 ">All</span>
            </div>
           
            <span className="px-2">Power Tools</span>
            <span className="px-2">Hand Tools</span>
            <span className="px-2">plumbing</span>
            <span className="px-2 slanted-g me-2">&#60;</span>
            <span className="px-2 slanted-g">&#62;</span>
        </div>
    </div>
    
   
    <div className="container feature">
      
  
      
      <div className="d-flex  ">
        {feature_brand.map((item, i) => (
            
          <div className="card mx-2 postion-relative">
              <img src={quick} className="zoom position-absolute " alt="" />
            
            <img src={item.brand_img} alt="" />
            <p className="text-muted">SKU:{item.SKU}</p>
            <p className="fw-bolder">{item.brand_name}</p>
            <div>
              <span>{item.rating} </span>
              <span>{item.reviews} reviews</span>
            </div>
            <div className="d-flex justify-content-between ">
            <p className="fw-bolder">${item.price}</p>
            <div className="cart-img">
            <img className="cartlogo" src={cart} alt="" />
            </div>
          

            </div>
           
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Feature;
