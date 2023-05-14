import React from "react";
import { Link } from "gatsby";
export default function AftercareContentPackageText() {
  return (
    <section className="interior-text-container">
      <h2 className="interior-section-heading">
        The Content Management Package
      </h2>
      <p className="interior-section-text">
        We avoid using Content Management Systems unless absolutely necessary,
        and instead opt for hand-coded static websites, as exemplified by our
        EZ-commerce bolt-on below. This approach allows our websites to maintain
        impressive performance regardless of your business's needs. This
        solution works well for nearly all businesses where online content
        changes minimally from year to year.
      </p>
      <p className="interior-section-text">
        We also cater to businesses with more frequent content updates! Our
        Content Management Package is designed to offer all the benefits of a
        static website, with the flexibility of a dynamic website. For a small
        fee, we handle your updates, and you'll automatically receive all the
        benefits of our Maintenance Package too!
      </p>
      <h3 className="interior-section-subheading">What you get</h3>
      <ul className="interior-section-list">
        <li className="interior-section-list-item">
          All the benefits of the maintenance package
        </li>
        <li className="interior-section-list-item">
          One free monthly content update (you provide)
        </li>
        <li className="interior-section-list-item">
          Further updates billed at £50 per post
        </li>
        <li className="interior-section-list-item">
          Discounted copywriting services
        </li>
        <li className="interior-section-list-item">
          Discounted graphic services
        </li>
        <li className="interior-section-list-item">
          Content creation starting from £100
        </li>
      </ul>
      <p className="interior-section-text">
        <em>£100pcm</em>
      </p>
      <div className="interior-text-link-container">
        <Link to="/contact" className="orange-link">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
