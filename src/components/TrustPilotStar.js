import React from "react";
import TrustPilotStarImg from "../images/trustpilotstar.svg";

export default function TrustPilotStar() {
  const startStyles = {
    backgroundColor: "#00b67a",
    height: "1.5rem",
    width: "1.5rem",
    borderRadius: "2px",
    margin: "auto 0.1rem",
  };
  return (
    <img
      src={TrustPilotStarImg}
      alt="Trust Pilot Rating Star"
      style={startStyles}
    />
  );
}
