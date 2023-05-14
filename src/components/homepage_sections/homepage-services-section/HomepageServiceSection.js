import React from "react";
import HomepageServiceSectionInfoCards from "./homepage-section-parts/HomepageServiceSectionInfoCards";
import HomepageServiceSectionIntroduction from "./homepage-section-parts/HomepageServiceSectionIntroduction";

export default function HomepageServiceSection() {
  return (
    <section className="services-section-container">
      <h2 className="service-section-heading">What We Do</h2>
      <HomepageServiceSectionIntroduction />
      <HomepageServiceSectionInfoCards />
    </section>
  );
}
