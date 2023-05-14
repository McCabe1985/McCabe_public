import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function HomepageServiceSectionInfoCards() {
  return (
    <section className="service-cards-section-container">
      <article className="service-info-card-container">
        <StaticImage
          src="../../../../images/responsivedesignicon.webp"
          alt="An icon depicting responsive web design."
          as="div"
          className="services-section-info-card-img-container"
          imgClassName="services-section-info-card-img"
          placeholder="blurred"
          loading="lazy"
        />
        <h3 className="service-info-card-title">Responsive Web Design</h3>
        <p className="service-info-card-text">
          Your website will not only function properly, but look amazing across
          all devices and screen sizes. Making your business accessible to
          everyone.
        </p>
        <Link className="service-info-card-link" to="/services#webdesign">
          Responsive Web Design
        </Link>
      </article>
      <article className="service-info-card-container">
        <StaticImage
          src="../../../../images/seoicon.webp"
          alt="An icon depicting responsive web design."
          as="div"
          className="services-section-info-card-img-container"
          imgClassName="services-section-info-card-img"
          placeholder="blurred"
          loading="lazy"
        />
        <h3 className="service-info-card-title">Search Engine Optimization</h3>
        <p className="service-info-card-text">
          We optimize all of our websites with SEO in mind, as standard. From
          code to keywords, your website will form the lynchpin of any marketing
          campaign.
        </p>
        <Link className="service-info-card-link" to="/services#seo/">
          SEO Optimization
        </Link>
      </article>
      <article className="service-info-card-container">
        <StaticImage
          src="../../../../images/performanceicon.webp"
          alt="An icon depicting responsive web design."
          as="div"
          className="services-section-info-card-img-container"
          imgClassName="services-section-info-card-img"
          placeholder="blurred"
          loading="lazy"
        />
        <h3 className="service-info-card-title">High Performance</h3>
        <p className="service-info-card-text">
          Your website will be optimized for high performance, maximizing
          usability, accessibility and providing a natural boost to your SEO.
        </p>
        <Link className="service-info-card-link" to="/services#corewebvitals/">
          High Performance
        </Link>
      </article>
    </section>
  );
}
