import React from 'react'
import ban1 from '../../asset/banner1.jpeg'
import ban2 from '../../asset/banner2.jpeg'
import "./banner.css"

function MotorBanner() {
  return (
    <>
    <div className="container d-flex justify-content-around mt-5 ">
        <div className=' ban position-relative'>
            <img src={ban1} alt="" />
            <div className='position-absolute fixed-top mt-3 '>
                <p className='text-warning fw-bolder h4 ms-3'>MOTOR OILS</p>
                <p className='text-light ms-3'>Synthetic motoroil with free shipping</p>
                <p className='text-light ms-3 friction'>friction free life guaranteed</p>
                <button className='btn btn-danger ms-3 mt-3'>shop Now</button>

            </div>

        </div>
        <div className='ban position-relative'>
            <img src={ban2} alt="" />
            <div className='position-absolute fixed-top mt-3 '>
                <p className='text-warning fw-bolder h4 ms-3 save bg-warning text-dark p-1 '>Save upto $40</p>
                <p className='text-light ms-3'>Synthetic motoroil with free shipping</p>
                <p className='text-light ms-3 friction'>friction free life guaranteed</p>
                <button className='btn btn-danger ms-3 mt-3'>shop Now</button>

            </div>

        </div>
    </div>
      
    </>
  )
}

export default MotorBanner
