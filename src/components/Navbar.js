import { Link } from "gatsby";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import DropdownLinksContainer from "./DropdownLinksContainer";
import Logo from "../images/mccabe_logo.svg";
import Hamburger from "../images/hamburger.svg";
import X from "../images/x.svg";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const showDropdown = () => {
    setDropdownOpen(true);
  };
  const hideDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      <nav className="nav-container" aria-label="Main menu">
        <Link to="/" className="logo-container">
          <img
            src={Logo}
            alt="McCabe Logo"
            className="logo"
            width="597"
            height="126"
          />
        </Link>

        <div
          className="nav-menu-dropdown-container"
          onMouseOver={showDropdown}
          onMouseOut={hideDropdown}
          onFocus={showDropdown}
          onBlur={hideDropdown}
          role="button"
          tabIndex={0}
        >
          <button
            className="nav-menu-dropdown-button"
            aria-label="Hover over to open the dropdown menu"
          >
            What we do {dropdownOpen ? "\u{027B6}" : "\u{027B4}"}
          </button>

          <>{dropdownOpen ? <DropdownLinksContainer /> : ""}</>
        </div>
        <Link to="/about/" className="nav-link" activeClassName="active">
          Who we are
        </Link>
        <Link to="/blogindex/" className="nav-link" activeClassName="active">
          Blog
        </Link>
        <Link to="/contact/" className="orange-link nav-call-to-action">
          Get in Touch
        </Link>

        <button
          onClick={handleToggle}
          className="hamburger-button"
          aria-label="Open the menu"
        >
          <img
            src={navbarOpen ? X : Hamburger}
            height="40"
            width="40"
            alt="menu button"
            className="hamburger"
          />
        </button>
      </nav>
      <>{navbarOpen ? <MobileNav /> : ""}</>
    </>
  );
}
