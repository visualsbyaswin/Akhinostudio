import React from "react";
import "./reuse.css";
const Reuse = ({fabout,sabout,tabout}) => {
  return (
    <>
      <div className="aboutservvises">
        <div className="aboutser1">

          <p>{fabout}</p>
          <p className="noner">{sabout}</p>
        </div>
        <div className="aboutser2">
          <p>{tabout}</p>

        </div>
      </div>
      <div className="abhr"></div>
    </>
  );
};

export default Reuse;
