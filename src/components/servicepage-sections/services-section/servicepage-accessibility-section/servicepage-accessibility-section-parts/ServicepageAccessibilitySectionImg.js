import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function ServicepageAccessibilitySectionImg() {
  return (
    <StaticImage
      className="interior-img-container"
      src="../../../../../images/accessibility.webp"
      alt="an picture of an opened padlock with a smiley face"
      as="div"
      placeholder="blurred"
    />
  );
}
