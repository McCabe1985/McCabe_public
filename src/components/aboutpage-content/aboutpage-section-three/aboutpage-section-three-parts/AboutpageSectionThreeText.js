import React from "react";
import { Link } from "gatsby";
export default function AboutpageSectionThreeText() {
  return (
    <section className="interior-text-container">
      <h2 className="section-two-heading">What else do you do?</h2>
      <p className="interior-section-text">Loads.</p>

      <p className="interior-section-text">
        But the core of our service is bridging the gap between web development
        and marketing agencies. Our standard services include on-site SEO
        optimization to provide you with a highly optimized website that
        performs well. Additionally, if you need continuous market research, we
        can accommodate that too. If you prefer to work with a dedicated
        marketing agency, we'll collaborate with them to incorporate your
        marketing strategy into every line of code on the website.
      </p>
      <p className="interior-section-text">
        Whether you need a high-performing website that boosts conversion rates
        and drives sales, or you're a marketing agency looking to outsource your
        web development, we have the expertise to bring your projects to life.
      </p>
      <div className="interior-text-link-container">
        <Link className="orange-link" to="/contact">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
