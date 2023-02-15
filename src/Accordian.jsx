import React, { useState } from "react";
import Myaccordian from "./Myaccordian";
import {questions} from "./Accordianapi";
import './Myaccordian.css'

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
   <div className="container">
           <div className="accordian_conatiner">
           <h1>ACCORDIAN (Que. & Ans.)</h1>

           
           
      {
      data.map((curElem) => {
     
          return( <Myaccordian key={curElem.id} {...curElem} />)
        })
        }
       </div>
      
      </div>

    </>
  )
}
export default Accordian;
