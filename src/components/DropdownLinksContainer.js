import React from "react";
import { Link } from "gatsby";

export default function DropdownLinksContainer() {
  return (
    <div className="dropdown-links-container">
      <Link className="dropdown-link" to="/services/" activeClassName="active">
        Services
      </Link>

      <Link
        className="dropdown-link"
        to="/aftercarepackages/"
        activeClassName="active"
      >
        Aftercare
      </Link>
    </div>
  );
}
