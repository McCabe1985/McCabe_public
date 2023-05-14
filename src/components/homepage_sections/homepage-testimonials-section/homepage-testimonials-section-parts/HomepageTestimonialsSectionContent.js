import React from "react";
import HomepageTestimonialsSectionText from "./HomepageTestimonialsSectionText";
import HomePageTestimonialsSectionGonzo from "./HomePageTestimonialsSectionGonzo";
export default function HomepageTestimonialsSectionContent() {
  return (
    <section className="testimonials-section-content-container">
      <HomepageTestimonialsSectionText />
      <HomePageTestimonialsSectionGonzo />
    </section>
  );
}
