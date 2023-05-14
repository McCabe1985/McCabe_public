import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function ServicepageWebdesignSectionImg() {
  return (
    <StaticImage
      className="interior-img-container"
      src="../../../../../images/webdesign.webp"
      alt="An image of a monitor with giant cogs in the background, a crude depiction of a website is on the screen."
      as="div"
      placeholder="blurred"
    />
  );
}
