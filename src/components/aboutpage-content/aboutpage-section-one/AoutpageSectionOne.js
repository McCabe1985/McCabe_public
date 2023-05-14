import React from "react";
import AboutpageSectionOneText from "./aboutpage-section-one-parts/AboutpageSectionOneText";
import AboutpageSectionOneImg from "./aboutpage-section-one-parts/AboutpageSectionOneImg";
export default function AoutpageSectionOne() {
  return (
    <section
      id="webdesign"
      className="interior-section-container about-img-right"
    >
      <AboutpageSectionOneText />
      <AboutpageSectionOneImg />
    </section>
  );
}
