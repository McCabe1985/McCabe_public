import React from "react";
import Clock from "../../../images/clockicon.svg";
import Phone from "../../../images/phoneicon.svg";
import Email from "../../../images/emailicon.svg";

export default function ContactDetails() {
  return (
    <article className="contact-page-details-container">
      <h1 className="contact-page-heading">Contact us!</h1>
      <p className="contact-page-blurb">
        We are passionate about what we do, and truly believe in our mission to
        raise the bar of web development by making expert-quality development
        accessible to all.
      </p>
      <p className="contact-page-text">
        <span>
          <img
            className="contact-icon"
            src={Phone}
            width="38.803"
            height="45.489"
            alt="a crude icon depicting a phone"
          />
        </span>{" "}
        07548451674
      </p>
      <p className="contact-page-text">
        <span>
          <img
            className="contact-icon"
            src={Email}
            width="40.446"
            height="26.503"
            alt=" a crude icon depicting an email"
          />
        </span>{" "}
        enquiries@mccabe-webdesign.com
      </p>
      <p className="contact-page-text">
        <span>
          <img
            className="contact-icon"
            src={Clock}
            width="38.448"
            height="38.448"
            alt="a crude icon depicting a clock"
          />
        </span>{" "}
        7am to 6pm monday-friday
      </p>
    </article>
  );
}
