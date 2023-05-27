import React from 'react'
import Toprated from '../toprated/Toprated'
import SpecialOffer from '../specialoffers/SpecialOffer'
import Bestseller from '../bestseller/Bestseller'
import "./specialprod.css"

function SpecialProd() {
  return (
    <>
    <div className='container mt-5 p-3 special_prod'>
        <div className="row">
            <div className="col">
            <Toprated />
            </div>
            <div className="col">
            <SpecialOffer />
            </div>
            <div className="col">
                <Bestseller />
            </div>
       
   
    

        </div>
    

    </div>
 
      
    </>
  )
}

export default SpecialProd
