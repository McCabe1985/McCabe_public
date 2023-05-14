import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function ServicepageCoreWebVitalsSectionImg() {
  return (
    <StaticImage
      className="interior-img-container"
      src="../../../../../images/corewebvitals.webp"
      alt="A picture of a website so optimized it turns your monitor into a rocket... for reasons"
      as="div"
      placeholder="blurred"
    />
  );
}
