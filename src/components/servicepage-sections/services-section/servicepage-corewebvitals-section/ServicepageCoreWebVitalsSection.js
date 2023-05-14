import React from "react";
import ServicepageCoreWebVitalsSectionText from "./servicepage-corewebvitals-section-parts/ServicepageCoreWebVitalsSectionText";
import ServicepageCoreWebVitalsSectionImg from "./servicepage-corewebvitals-section-parts/ServicepageCoreWebVitalsSectionImg";
export default function ServicepageCoreWebVitalsSection() {
  return (
    <section
      id="corewebvitals"
      className="interior-section-container img-right"
    >
      <ServicepageCoreWebVitalsSectionText />
      <ServicepageCoreWebVitalsSectionImg />
    </section>
  );
}
