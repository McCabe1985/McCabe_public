import React from "react";
import BottomLogo from "../../images/mccabe_logo.svg";

export default function FooterLogo() {
  return (
    <div className="footer-logo-container">
      <img
        src={BottomLogo}
        alt="McCabe Logo"
        className="footer-logo"
        aria-label="McCabe Web Design Logo"
        loading="lazy"
        width="400"
        height="104"
      />
    </div>
  );
}
