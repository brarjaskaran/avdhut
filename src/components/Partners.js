import React from "react";
import fh from "../images/partners/fh.png";
import broadspectrum from "../images/partners/broadspectrum.png";
import lendlease from "../images/partners/lendlease.png";
import ucg from "../images/partners/ucg.png";
import telstra from "../images/partners/Telstra_logo.png";
import downer from "../images/partners/downer.png";
import "./Partners.css";
function Partners() {
  return (
    <div className="partners">
      <img src={fh} alt="Fulton Hogan" />
      <img src={telstra} alt="Telstra" />
      <img src={broadspectrum} alt="Broadspectrum" />
      <img src={lendlease} alt="LendLease" />
      <img src={ucg} alt="UCG" />
      <img src={downer} alt="Downer" />
    </div>
  );
}

export default Partners;
