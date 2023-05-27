import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topheader.css"

function Topheader() {
    const leftArr=['Aboutus','Contacts','Store location','Track Order','Blog']
    const rightArr=[]
  return (
    <>
      <div className="top_header d-flex justify-content-around">
      <div className="left m-2 d-flex">
        {
            leftArr.map((item,i)=>(
               
                <ul className="d-flex list-unstyled ">
                  <li className="px-2 text-muted" key={i}>{item}</li>
                
                </ul>
           

            ))
        }
           </div>
       
        <div className="right">
          <ul  className="d-flex m-2 list-unstyled ">
            <li className="px-2 text-muted">
              compare:<span className="text-dark fw-bolder px-1">2</span>
            </li>
            <li className="px-2 text-muted">
              currency:<span className="text-dark fw-bolder px-1">RS</span>
            </li>
            <li className="px-2 text-muted">
              language:<span className="text-dark fw-bolder px-1">EN</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-between">
      <div className="line1"></div>
      <div className="line2"></div>
      </div>
    
    </>
  );
}

export default Topheader;
