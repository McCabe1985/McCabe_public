import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HomePageTestimonialsSectionGonzo() {
  return (
    <StaticImage
      src="../../../../images/gonzo2.webp"
      alt="A splash image with little meaning. We call them Gonzos."
      as="div"
      className="testimonials-section-gonzo-container"
      imgClassName="testimonials-section-gonzo"
      placeholder="blurred"
      loading="lazy"
    />
  );
}
