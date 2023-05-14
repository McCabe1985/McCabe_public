import React from "react";
import { Link } from "gatsby";

export default function MobileNav() {
  return (
    <nav className="mobile-nav-container">
      <ul className="mobile-navbar">
        <li className="mobile-nav-item">
          <Link to="/services/" activeClassName="active">
            Services
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link to="/aftercarepackages/" activeClassName="active">
            Aftercare
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link to="/about/" activeClassName="active">
            About US
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link to="/blogindex/" activeClassName="active">
            Blog
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link to="/contact/" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
