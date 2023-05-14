import React from "react";
import HomepageFeaturesCards from "./homepage-features-section-parts/HomepageFeaturesCards";
import HomePageFeaturesLinks from "./homepage-features-section-parts/HomePageFeaturesLinks";
export default function HomepageFeaturesSection() {
  return (
    <section className="features-section-container">
      <h2 className="features-section-heading">Top Features</h2>
      <HomepageFeaturesCards />
      <HomePageFeaturesLinks />
    </section>
  );
}
