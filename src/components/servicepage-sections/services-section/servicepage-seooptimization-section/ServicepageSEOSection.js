import React from "react";
import ServicepageSEOOptimizationSectionText from "./servicepage-seooptimization-section-parts/ServicepageSEOOptimizationSectionText";
import ServicepageSEOOptimizationSectionImg from "./servicepage-seooptimization-section-parts/ServicepageSEOOptimizationSectionImg";

export default function ServicepageSEOOptimizationSection() {
  return (
    <section id="seo" className="interior-section-container img-left">
      <ServicepageSEOOptimizationSectionImg />
      <ServicepageSEOOptimizationSectionText />
    </section>
  );
}
