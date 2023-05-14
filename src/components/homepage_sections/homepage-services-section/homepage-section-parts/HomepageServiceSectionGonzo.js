import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HomepageServiceSectionGonzo() {
  return (
    <StaticImage
      src="../../../../images/communications.webp"
      alt="A splash image with little meaning. We call them Gonzos."
      as="div"
      className="services-section-gonzo-container"
      imgClassName="services-section-gonzo"
      placeholder="blurred"
      loading="lazy"
    />
  );
}
