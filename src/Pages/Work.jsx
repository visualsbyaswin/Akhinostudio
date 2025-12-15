import React, { useRef } from "react";
import WorkSection1 from "../components/worksection/WorkSection1";
import Faq from "../components/FaqQuest/Faq";
import { StickyCarddata } from "../assets/assets";
import UseCards from "../components/Animations/StickyCards";
import PieceCard from "../components/Acards/Play";
import GradientText from "../components/Animations/texts";
import Allwork from "../components/Allworks/Allwork";
    



import Allf from "../components/Allfaeture/Allf";
import TextPressure from "../components/Animations/texts";
import useRevealer from "../components/Hooks/Hook";
// import GradientText from './GradientText'
const Work = () => {
  const revelerref=useRef(null)
  useRevealer(revelerref)
  return (
    <div>
      <div className="revealer" ref={revelerref}></div>


<div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="All Works!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>

<Allf/>
      
      <Faq/>
    </div>
  );
};

export default Work;
