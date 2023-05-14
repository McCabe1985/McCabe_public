import React from "react";
import { Link } from "gatsby";
export default function AboutpageSectionTwoText() {
  return (
    <section className="interior-text-container">
      <h2 className="section-two-heading">Yeah yeah... who needs ya!</h2>
      <p className="interior-section-text">
        Any business that needs a website that can attract customers and drive
        sales. We understand that cookie-cutter solutions like drag-and-drop
        website builders may not be effective in meeting the specific needs of
        your business. Thus, our websites are tailored to meet the unique
        demands of your business and get results.
      </p>

      <p className="interior-section-text">
        Our pricing is affordable, and our websites are effective online
        platforms right out of the box. We also offer long-term partnerships to
        help build your online brand, but if you prefer, you can take control of
        your website or hand it over to a marketing agency.
      </p>
      <p className="interior-section-text">
        {" "}
        <Link className="interior-external-link" to="/services">
          Check out our services page for more information
        </Link>{" "}
      </p>
    </section>
  );
}
