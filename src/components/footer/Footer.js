import React from "react";
import "./footer.css";
import fb from "../../asset/fb1.png";
import twi from "../../asset/twitter.png";
import yt from "../../asset/you.jpg";
import insta from "../../asset/insta.png";
import wifi from "../../asset/wifi.png";
import pay from "../../asset/payments.png";

function Footer() {
  return (
    <>
      <div className="container bg-dark p-5">
        <div className="row">
          <div className="col-4 ">
            <div>
              <p className="text-light h5">Contact us</p>
              <p className="text-secondary ">
                hi always open for cooperations and suggestions
              </p>
              <p className="text-secondary lh-sm ">
                contact us in one of the ways below
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <p className="text-secondary">PHONE NUMBER</p>
                <p className="text-light fw-bolder">9875839330</p>
              </div>
              <div>
                <p className="text-secondary">EMAIL</p>
                <p className="text-light fw-bolder">carrers@ui2ux.com</p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="text-secondary">Our location</p>
                <p className="text-light">
                  chinnavedampatti,coimbatore ,tamilnadu -645321
                </p>
              </div>
              <div>
                <p className="text-secondary">WORKING HOURS</p>
                <p className="text-light">MON-FRI 10.00 am to 5.00pm</p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex justify-content-around">
              <div className="info">
                <p className="fw-bolder h6 text-light">information</p>
                <section className="Nav">
                  <p>About Us</p>
                  <p>Delivery Information</p>
                  <p>Privacy Policy</p>
                  <p>Brands</p>
                  <p>Contact us</p>
                  <p>Returns</p>
                  <p>Site Map</p>
                </section>
                <p></p>
              </div>
              <div className="myacc">
                <p className="fw-bolder h6 text-light">MyAccount</p>
                <section className="Nav1">
                  <p>Store Location</p>
                  <p>Order History</p>
                  <p>Wish List</p>
                  <p>Newsletter</p>
                  <p>Special Offers</p>
                  <p>Gift Certificates</p>
                  <p>Affiliate</p>
                </section>
              </div>
              <div className="newsletter">
                <p className="fw-bolder h6 text-light">Newsletter</p>
                <section className="Nav2">
                  <p>
                    Enter your email address below to subscribe to our
                    newsletter
                  </p>
                  <p>and keep up to date with discounts and special offers.</p>
                </section>
                <input
                  className="bg-dark"
                  type="text"
                  placeholder="user@gmail.com"
                ></input>
                <button className="bg-success text-white">Subscribe</button>
                <br />
                <br />
                <section className="Nav3">
                  <p>Follow us on social networks</p>
                </section>
                <section className="imagee d-flex px-2 rounded-circle">
                  <section className="fbimg px-1 ">
                    <img src={fb} alt="" width={30} />
                  </section>
                  <section className="twi px-1">
                    <img src={twi} alt="" width={30} />
                  </section>
                  <section className="you  px-1">
                    <img src={yt} alt="" width={30} />
                  </section>
                  <section className="instaa px-1">
                    <img src={insta} alt="" width={30} />
                  </section>
                  <section className="wifii px-1">
                    <img src={wifi} alt="" width={30} />
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-dark d-flex justify-content-around">
       <div className="p-3 text-center">
        <span className="text-secondary px-2">Powered by </span>
        <span className="text-light">React/Next.js</span>
        <span className="text-secondary px-2">-Designed by</span>
        <span>UI2UX solutions</span>
       </div>
       <div className="p-3">
        <img src={pay} alt="" />
       </div>
      </div>
    </>
  );
}

export default Footer;
