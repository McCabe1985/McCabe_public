import React from "react";

export default function ContactDetails() {
  return (
    <div className="footer-item">
      <h2 className="footer-subheading">Get in touch</h2>
      <h3 className="footer-contact-subheading">Address</h3>
      <address className="footer-contact">
        Brookfield Court, Selby Road, Garforth
        <br></br>
        Leeds
        <br></br>
        West Yorkshire, LS25 1NB
      </address>
      <h3 className="footer-contact-subheading">Contact</h3>
      <a href="tel:+447548451674" className="footer-number">
        07548451674
      </a>
      <address className="footer-email">enquiries@mccabe-webdesign.com</address>
    </div>
  );
}
