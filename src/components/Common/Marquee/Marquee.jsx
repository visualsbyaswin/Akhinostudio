import React from "react";
import "./Marquee.css";

const Marquee = ({ reuser }) => {
  return (
    <div className="marquee">
      <div className="marquee_inner">
        <span></span>
        <span>{reuser}</span>
        <span>{reuser}</span>
        <span>{reuser}</span>
        <span>{reuser}</span>
        <span>{reuser}</span>
      </div>
      <div className="marquee_inner" aria-hidden="true">
        <span>{reuser}</span>
        <span>{reuser}</span>
        <span>{reuser}</span>
        <span>{reuser}</span>
        <span>{reuser}</span>
      </div>
    </div>
  );
};

export default Marquee;
