import React from "react";
import { Link } from "gatsby";

export default function HomepageHeaderText() {
  return (
    <div className="homepage-text-container">
      <h1 className="hero-heading">
        Web Design
        <br /> West Sussex
      </h1>
      <p className="header-subtext">
        We offer professional web design services in Sussex and beyond at
        affordable prices, with a turn around that can't be beat!
      </p>
      <Link className="header-link" to="/services/">
        Our Services
      </Link>
    </div>
  );
}
