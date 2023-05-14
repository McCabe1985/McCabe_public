import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function AftercareContentPackageImg() {
  return (
    <StaticImage
      className="interior-img-container"
      src="../../../../../images/content.webp"
      alt="An image of a pen and a piece of paper denoting the generation of new content"
      as="div"
      placeholder="blurred"
    />
  );
}
