import React from "react";
import ServicepageWebdesignSection from "./servicepage-webdesign-section/ServicepageWebdesignSection";
import ServicepageSEOOptimizationSection from "./servicepage-seooptimization-section/ServicepageSEOSection";
import ServicepageCoreWebVitalsSection from "./servicepage-corewebvitals-section/ServicepageCoreWebVitalsSection";
import ServicepageAccessibilitySection from "./servicepage-accessibility-section/ServicepageAccessibilitySection";

export default function ServicesSection() {
  return (
    <section className="interior-content-container">
      <ServicepageWebdesignSection />
      <ServicepageSEOOptimizationSection />
      <ServicepageCoreWebVitalsSection />
      <ServicepageAccessibilitySection />
    </section>
  );
}
