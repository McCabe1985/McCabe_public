import React from "react";
import Contactform from "../Contactform";
import ContactDetails from "./contact-page-parts/ContactDetails";
export default function ContactPageContents() {
  return (
    <section className="contact-page-container">
      <ContactDetails />
      <section className="contact-page-form-container">
        <Contactform />
      </section>
    </section>
  );
}
