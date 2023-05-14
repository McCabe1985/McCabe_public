import React from "react";
import FooterContent from "./footer/FooterContent";

export default function Footer() {
  return (
    <footer className="footer-container">
      <FooterContent />

      <p className="copyright-text">
        {" "}
        Copyright© McCabe Web Design 2023 - All Rights Reserved{" "}
      </p>
    </footer>
  );
}
