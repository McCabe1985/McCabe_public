import React from "react";
import { Link } from "gatsby";
export default function AftercareStandardPackageText() {
  return (
    <section className="interior-text-container">
      <h2 className="interior-section-heading">Maintenance Package</h2>
      <p className="interior-section-text">
        At McCabe's, we understand that you've got better things to do than
        worry about your website. You've got a business to run, and it is far
        more efficient to delegate the more specialist roles to others.
      </p>
      <p className="interior-section-text">
        Our maintenance package is designed to take the pressure off when
        maintaining your website because we take care of everything for you!
      </p>
      <h3 className="interior-section-subheading">
        With the maintenance package you get
      </h3>
      <ul className="interior-section-list">
        <li className="interior-section-list-item">
          Weekly code audits to make sure everything is still working
        </li>
        <li className="interior-section-list-item">
          Automatic code updates, making sure that your website doesn't break
          when the technology changes
        </li>
        <li className="interior-section-list-item">
          Discounted annual redesigns
        </li>
        <li className="interior-section-list-item">
          Access to our 24/7 help number
        </li>
      </ul>
      <p className="interior-section-text">
        <em>£50pcm</em>
      </p>
      <div className="interior-text-link-container">
        <Link to="/contact" className="orange-link">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
