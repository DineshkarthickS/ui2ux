import React from 'react'
import { customer_support } from '../constant'

function CustomerSupport() {
  return (
    <>
    <div className="container mt-5">
        <div className="d-flex justify-content-between">
            {
                customer_support.map((item,i)=>(
                    <div className='d-flex' key={i}>
                        <div className=''>
                            <img className='itm_img' src={item.img} alt="" />
                        </div>
                        <div className='ms-2'>
                            <p className='fw-bolder '>{item.name}</p>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))

            }

        </div>
    </div>

  
      
    </>
  )
}

export default CustomerSupport
