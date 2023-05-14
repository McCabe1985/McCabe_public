import React from "react";
import AboutpageHeader from "./aboutpage-header/AboutpageHeader";
import AboutpageSectionOne from "./aboutpage-section-one/AoutpageSectionOne";
import AboutpageSectionTwo from "./aboutpage-section-two/AboutpageSectionTwo";
import AboutpageSectionThree from "./aboutpage-section-three/AboutpageSectionThree";
export default function AboutpageContent() {
  return (
    <section className="interior-content-container">
      <AboutpageHeader />
      <AboutpageSectionOne />
      <AboutpageSectionTwo />
      <AboutpageSectionThree />
    </section>
  );
}
