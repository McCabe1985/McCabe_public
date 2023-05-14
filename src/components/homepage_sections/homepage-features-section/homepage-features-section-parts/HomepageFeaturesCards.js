import React from "react";
import { Link } from "gatsby";
export default function HomepageFeaturesCards() {
  return (
    <section className="features-section-infocards-section-container">
      <article className="feature-section-infocard-container">
        <h3 className="feature-section-infocard-title">
          We update your content!
        </h3>
        <p className="feature-section-infocard-text">
          You don't need to waste time updating the content of your website,
          with our{" "}
          <Link
            className="interior-external-link"
            to="/aftercarepackages#content-management/"
          >
            Content Management Package
          </Link>
          , just send any updates through to us and we will make those changes
          immediately.
        </p>
      </article>
      <article className="feature-section-infocard-container">
        <h3 className="feature-section-infocard-title">
          Expert craftsmanship, accessible price.
        </h3>
        <p className="feature-section-infocard-text">
          We don't mess around with WordPress, Wix or other, quick and dirty
          solutions. All of our websites are expertly coded from scratch and are
          specced for high performance and search engine ranking.
        </p>
      </article>
      <article className="feature-section-infocard-container">
        <h3 className="feature-section-infocard-title">Rapid Turnaround</h3>
        <p className="feature-section-infocard-text">
          We've been doing our thing a long time now and have perfected our
          design and development processes, meaning that you will get your site
          up and running in no time.
        </p>
      </article>
    </section>
  );
}
