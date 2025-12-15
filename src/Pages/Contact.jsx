import React, { useRef } from "react";
import Piece from "../components/Pieceofcon/Piece";
import useRevealer from "../components/Hooks/Hook";

const Contact = () => {
  const revealerRef = useRef(null);
  useRevealer(revealerRef);
  return (
    <>
      useRevealer()
      <div className="revealer" ref={revealerRef}></div>
      <section className="contactsec">
        <Piece />
      </section>
    </>
  );
};

export default Contact;
