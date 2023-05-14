import React from "react";
import { Link } from "gatsby";

export default function ServicepageAccessibilitySectionText() {
  return (
    <section className="interior-text-container">
      <h2 className="interior-section-heading">Accessibility foremost</h2>
      <p className="interior-section-text">
        The internet is THE great equalizer. It is probably the only place in
        the world where nearly everyone can have equal access. From a business
        perspective, this is fantastic, as it removes barriers for those who
        might not have been able to engage with a brick-and-mortar
        establishment, and allows them to access products and services
      </p>
      <p className="interior-section-text">
        in 2016,{" "}
        <a
          href="https://www.clickawaypound.com/"
          className="interior-external-link"
        >
          the Click-Away Pound survery
        </a>{" "}
        found that over four million people abandoned <em>retail </em>websites
        due to accessibility issues. As a result, these businesses lost out on
        potential revenue, while other businesses that had prioritized online
        accessibility gained an advantage. It is estimated that British
        businesses lose approximately <em>£11.75 billion</em> every year due to
        poor website accessibility.
      </p>
      <p className="interior-section-text">
        This is why we take great care to ensure that our work is completely
        accessible. We make sure that links contain meaningful text to
        facilitate screen readers, and use appropriate ARIA labels where
        necessary. We also provide transcripts for audio and video content to
        ensure that people who are hard of hearing have equal access to the
        information. Additionally, we offer advice on everything from color
        schemes to animations to ensure that your website is accessible to
        everyone.
      </p>
      <p className="interior-section-text">
        At McCabe's we believe that accessibility should be as central to our
        process as SEO and good Core Web Vitals. It's bad business to exclude
        people, but worse than that, it's really bad manners!
      </p>
      <div className="interior-text-link-container">
        <Link to="/contact/" className="orange-link">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
