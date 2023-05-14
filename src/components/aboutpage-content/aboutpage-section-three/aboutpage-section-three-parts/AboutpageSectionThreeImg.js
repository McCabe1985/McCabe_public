import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function AboutpageSectionThreeImg() {
  return (
    <StaticImage
      className="interior-img-container"
      src="../../../../images/gonzo3.webp"
      alt="A happy little alien, we call these sorts of images Gonzos, they have no meaning, they're just odd."
      as="div"
      placeholder="blurred"
    />
  );
}
