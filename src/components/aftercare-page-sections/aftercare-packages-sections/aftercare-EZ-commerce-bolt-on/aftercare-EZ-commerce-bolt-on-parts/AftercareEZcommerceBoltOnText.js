import React from "react";
import { Link } from "gatsby";
export default function AftercareEZcommerceBoltOnText() {
  return (
    <section className="interior-text-container">
      <h2 className="interior-section-heading">The EZ-commerce Bolt-on</h2>
      <p className="interior-section-text">
        For small businesses that are in their early stages and require an
        efficient and user-friendly system to manage their products and sales,
        our EZ-commerce bolt-on offers an ideal solution.
      </p>
      <p className="interior-section-text">
        We utilize Stripe as the backend for our EZ-commerce solution due to its
        superior accessibility and ease of use, combined with a custom-built
        front-end website. This results in a hassle-free product listing
        management experience for you and a seamless browsing experience for
        your customers.
      </p>
      <p className="interior-section-text">
        Just pick one of our website packages, add this bolt-on and we will
        handle the rest! Full training on the Stripe CMS is provided at the end.
      </p>
      <p className="interior-section-text">
        <em>£745 + Website Package</em>
      </p>
      <div className="interior-text-link-container">
        <Link to="/contact" className="orange-link">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
