import React from "react";
import "./tab.css";
import hamburger from "../../asset/svg/ham.svg";

function Tabmenu() {
  return (
    <>
      <div className="tab-menu container-fluid p-2">
        <div className="row ">
          <div className="d-flex col-8 mx-5 ">
            <div className="mx-3 d-flex">
              <div className="hm-img mt-2">
                <img className="" src={hamburger} alt="" />
              </div>
              <select name="" id="">
                <option value="">Select by Category</option>
              </select>
            </div>

            <div>
              <select>
                <option value="">Home</option>
              </select>
              <select>
                <option value="">Megamenu</option>
              </select>
              <select>
                <option value="">Shop</option>
              </select>
              <select>
                <option value="">Account</option>
              </select>
              <select>
                <option value="">Pages</option>
              </select>
            </div>
          </div>

          <div className="col-2">
            <span className="text muted">call us:</span>
            <span className="fw-bolder mx-2">9783285930</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabmenu;
