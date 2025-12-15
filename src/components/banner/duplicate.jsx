import React from "react";
import "./duplicate.css";
const Duplicate = ({skill1,skill2,skill3,skill4}) => {
  return (
    <div className="banner">
      <div className="statergy1">
        <p>{skill1}</p>
        <p>{skill2}</p>
        <p>{skill3}</p>
        <p>{skill4}</p>
      </div>
    </div>
  );
};

export default Duplicate;
