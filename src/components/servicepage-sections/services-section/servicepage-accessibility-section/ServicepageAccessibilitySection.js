import React from "react";
import ServicepageAccessibilitySectionText from "./servicepage-accessibility-section-parts/ServicepageAccessibilitySectionText";
import ServicepageAccessibilitySectionImg from "./servicepage-accessibility-section-parts/ServicepageAccessibilitySectionImg";

export default function ServicepageAccessibilitySection() {
  return (
    <section id="accessibility" className="interior-section-container img-left">
      <ServicepageAccessibilitySectionImg />
      <ServicepageAccessibilitySectionText />
    </section>
  );
}
