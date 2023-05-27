import React from 'react'
import { SpecialOffers } from '../constant'


function SpecialOffer() {
  return (
    <>
    <div className="container  ">
        <p className='fw-bolder h5'>Special Offers</p>
        {SpecialOffers.map((item, i) => (
            <div key={i} className="card mb-3 p-2">
          <div className="d-flex" >
            <div className="img_content ">
              <img src={item.prod_img} alt="" className="" />
            </div>
            <div className="top_rated">
              <p className="fw-bolder">{item.prod_name}</p>
              <div className="d-flex">
                <p className="text-warning mx-2">&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                <p className="rating text-muted mt-2">{item.rating} reviews</p>
              </div>
              <p className="fw-bolder">{item.price}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default SpecialOffer
