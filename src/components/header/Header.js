import React from "react";
import logo from "../../asset/logo.png";
import "./header.css";
import carimg from "../../asset/svg/car.svg";
import hrt from "../../asset/svg/heart.svg";
import user from "../../asset/svg/person.svg"
import cart from "../../asset/svg/cart.svg"

function Header() {
  return (
    <>
      <div className="container-fluid header">
        <div className="row ">
          <div className="col-md-8 col-sm-12 d-flex align-items-center">
            <div className="logo h-50 me-5 ps-5">
              <img src={logo} className="h-100" alt="logo" />
            </div>
            <div className="w-25 position-relative me-3  ">
              <img
                src={carimg}
                alt=""
                className="position-absolute mx-1 p-2 px-0"
              />
              <select
                className="px-4 w-100 options    "
                aria-label="Default select example"
              >
                <option selected className="fw-bolder p-2">
                  Select vehicle
                </option>
                <option value="1">Bike</option>
                <option value="2">Car</option>
                <option value="3">Auto</option>
              </select>
            </div>
            <div className="w-25">
              <input
                type="text"
                className="form-control w-100"
                placeholder="Enter keyword or Part number"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex align-items-center">
            <div className="mx-3 position-relative">
              <img src={hrt} alt="heart" />
              <div className="position-absolute count fixed-top">
                 0
              </div>
            </div>
            <div className="d-flex ">
                <div  className="mx-2">
                <img src={user} alt="user" />
                </div>
             
              <div className="r-col">
              <p className="text-muted first_p">hello,Login</p>
              <p className="text-dark fw-bolder lh-1">My Account</p>
              </div>
           
            </div >
            <div className="d-flex mx-3">
                <div className="mx-2 position-relative">
                <img  src={cart} alt="cart" />
                <div className="position-absolute count fixed-top">
                 0
              </div>

                </div>
             
              <div className="r-col">
              <p className="first_p">Shopping cart</p>
              <p className="fw-bolder"> &#x20B9; 1400</p>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
