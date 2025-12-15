import React from "react";
import "./piece.css";
import { assets } from "../../assets/assets";
import Banner4 from "../banner/Dup";
import SvgContainer from "../../assets/Aroow";

const Piece = () => {
  return (
    <>
      <div className="maincontact">
        <div className="contentofcontacts">
          <div className="imgcon">
            <img src={assets.move} alt="" />
          </div>

          <div className="condetail">
            <div className="contactrows">
              <div className="rwcontents">
                <p>Office: Tokyo, Japan.</p>
                 <img src={assets.arrow} alt="" />
              </div>
              <div className="downfall"></div>
            </div>

            <div className="contactrows">
              <div className="rwcontents">
                <p> Follow me on Instagram</p>
                 <img src={assets.arrow} alt="" />
              </div>
              <div className="downfall"></div>
            </div>

            <div className="contactrows">
              <div className="rwcontents">
                <p>+1 34566 4565 </p>
                 <img src={assets.arrow} alt="" />
              </div>
              <div className="downfall"></div>
            </div>

            <div className="contactrows">
              <div className="rwcontents">
                <p>sayhi@akihiko.com</p>
                <img src={assets.arrow} alt="" />
              </div>
              <div className="downfall"></div>
            </div>
          </div>
        </div>
        <Banner4 />
        <div className="hrrs"></div>
              <div className="contactbigtext">
        <p>Contact Now</p>
      </div>
      </div>


    </>
  );
};

export default Piece;

// import React from 'react'
// import "./piece.css"

// import UseCards from '../Animations/StickyCards'
// const Piece = () => {
//   return (
// <div className="mcontact">
// <section className="intro">
//     <h1>The Foundation</h1>
// </section>
// <UseCards/>
// <section className="outro">
//     <h1>Ends in form</h1>
// </section>
// </div>
//   )
// }

// export default Piece
