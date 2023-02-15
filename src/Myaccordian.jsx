import React,{useState} from "react";
import "./Myaccordian.css";

const Myaccordian = ({ questions, answers }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="ques_ans">
        <p className="plus" onClick={() => setShow(!show)}>
          {show ? "➖" : "➕"}
        </p>
        <p>{questions}</p>
      </div>
      {show && <p className="para"> Ans- {answers}</p>}
    </>
  );
};
export default Myaccordian;
