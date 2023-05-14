import React from "react";
import { Link } from "gatsby";

export default function HomePageFeaturesLinks() {
  return (
    <div className="features-section-links-container">
      <Link to="/aftercarepackages/" className="features-section-packages-link">
        Our Services
      </Link>
      <Link to="/contact" className="features-section-contact-link">
        Get in Touch
      </Link>
    </div>
  );
}
