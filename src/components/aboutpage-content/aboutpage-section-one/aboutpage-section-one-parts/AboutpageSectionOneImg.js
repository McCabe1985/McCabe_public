import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function AboutpageSectionOneImg() {
  return (
    <StaticImage
      className="interior-img-container"
      src="../../../../images/gonzo1.webp"
      alt="A happy little robot, we call these sorts of images Gonzos, they have no meaning, they're just odd."
      as="div"
      placeholder="blurred"
    />
  );
}
