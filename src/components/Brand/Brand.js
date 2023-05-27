import React from 'react'
import {brands} from "../constant"
import "./Brand.css"


const Brand = () => {
    
  return (
    <div className='container d-flex flex-wrap mt-5'>
        {
            brands.map((item,index)=>(
                <div className='cards ' key={index}>
                    <img src={item.brand} alt="" />
                    <p>{item.name}</p>
                </div>
            ))
        }
      
    </div>
  )
}

export default Brand
