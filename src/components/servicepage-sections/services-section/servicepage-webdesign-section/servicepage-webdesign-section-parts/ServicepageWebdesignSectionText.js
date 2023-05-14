import React from "react";
import { Link } from "gatsby";

export default function ServicepageWebdesignSectionText() {
  return (
    <section className="interior-text-container">
      <h2 className="interior-section-heading">
        Professional Web Design and Development
      </h2>
      <p className="interior-section-text">
        At McCabe's, we understand that businesses need reliable,
        high-performance online platforms that can attract new customers, and we
        have dedicated ourselves to providing them with our unique blend of
        expert craftsmanship, and outside-the-box thinking.
      </p>
      <p className="interior-section-text">
        We take a meticulous approach to every aspect of your website, carefully
        planning everything to achieve maximum impact without compromising on
        performance. Our goal is to deliver a top-quality product that not only
        looks great but also naturally ranks high in search engine results. With
        our attention to detail and focus on performance, you can be confident
        that your website will deliver an outstanding user experience and drive
        conversion rates for your business.
      </p>
      <p className="interior-section-text">
        To this end we don't cut corners, we don't use WordPress, page builders
        or other quick and dirty approaches to web design and development.
        Inevitably these options lead to code bloat which absolutely will impact
        the performance of your website and reduce your ability to rank in
        search engines like Google.
      </p>
      <p className="interior-section-text">
        If a high-performance, high-converting website is what you need, then
        accept no compromises or substitutes. Book a FREE online consultation
        today!
      </p>
      <div className="interior-text-link-container">
        <Link to="/contact/" className="orange-link">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
