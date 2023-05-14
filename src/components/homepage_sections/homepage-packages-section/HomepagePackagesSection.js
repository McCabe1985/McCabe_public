import React from "react";
import HomepagePackagesInfocards from "./homepage-packages-section-parts/HomepagePackagesInfocards";

export default function HomepagePackagesSection() {
  return (
    <section className="packages-section-container">
      <h2 className="packages-section-heading">Website Packages</h2>
      <HomepagePackagesInfocards />
    </section>
  );
}
