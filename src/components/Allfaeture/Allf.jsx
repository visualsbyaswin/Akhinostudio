import React from 'react'
import { assets } from '../../assets/assets'
import Model from '../Common/models/Model'
const Allf = () => {
  return (
    <div>
      <div className="allfeaturedanimationsection">
        <div className="firstfeature">
          <div className="fimagecontainer">
            <img  className="worldisyour" src={assets.featurem1} alt="" />

            <div className="captions">
              <div>
                <h3>Sounder Goods</h3>
              </div>
              <div className="bracket">
                <h3>(01)</h3>
              </div>
              <div className="smallimagecontainer">
                <img  src={assets.featurec1} alt="" />
              </div>
            </div>
               <Model designer="Branding"/>
          </div>
          <div className="simagecontainer">
            <img className="worldisyour" src={assets.featurem2} alt="" />

            <div className="captions">
              <div>
                <h3>Halo Waer</h3>
              </div>
              <div className="bracket">
                <h3>(02)</h3>
              </div>
            </div>
            <div className="smallimagecontainer1">
              <img src={assets.featurec2} alt="" />
            </div>
         <Model designer="brand design"/>
          </div>
        </div>
        <div className="secondfeature">
          <div className="sectimagecontainer">
            <img className="worldisyour" src={assets.featurem3} alt="" />

            <div className="captions">
              <div>
                <h3>Lucent Labs</h3>
              </div>
              <div className="bracket">
                <h3>(03)</h3>
              </div>
            </div>
            <div className="smallimagecontainer2">
              <img src={assets.featurec3} alt="" />
            </div>
                <Model designer="creative direction"/>
          </div>
         
        </div>
        <div className="thirdfeature">
          <div className="thcontainer">
            <img className="worldisyour" src={assets.featurem4} alt="" />

            <div className="captions">
              <div>
                <h3>Arc Bloom</h3>
              </div>
              <div className="bracket">
                <h3>(04)</h3>
              </div>
            </div>
            <div className="smallimagecontainer2">
              <img src={assets.featurec4} alt="" />
            </div>
                <Model designer="creative devoloper"/>
          </div>
          <div className="fhcontainer">
            <img  className="worldisyour" src={assets.featurem5} alt="" />

            <div className="captions">
              <div>
                <h3>Atelira nare</h3>
              </div>
              <div className="bracket">
                <h3>(05)</h3>
              </div>
            </div>
            <div className="smallimagecontainer2">
              <img src={assets.featurec5} alt="" />
            </div>
                <Model designer="identity design"/>
          </div>
        </div>
      </div></div>
  )
}

export default Allf