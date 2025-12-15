import React from "react";
import "./client.css";
import Reuse from "../ReuseHeadings/Reuse";
import ThreeDScroll from "../Animations/VideoHover";
const Clients = () => {
  return (
    <section className="clients">
      <Reuse
        fabout="© Brand Partners パートナー"
        sabout="(WDX® — 08)"
        tabout="Creative Teams"
      />
      <div className="clientheading">
        <h1>Clients</h1>
      </div>
      <ThreeDScroll/>
         

    </section>
  );
};

export default Clients;
