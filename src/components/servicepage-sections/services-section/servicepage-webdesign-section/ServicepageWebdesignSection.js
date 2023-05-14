import React from "react";

import ServicepageWebdesignText from "./servicepage-webdesign-section-parts/ServicepageWebdesignSectionText";
import ServicepageWebdesignImg from "./servicepage-webdesign-section-parts/ServicepageWebdesignSectionImg";

export default function ServicepageWebdesignSection() {
  return (
    <section id="webdesign" className="interior-section-container img-right">
      <ServicepageWebdesignText />
      <ServicepageWebdesignImg />
    </section>
  );
}
