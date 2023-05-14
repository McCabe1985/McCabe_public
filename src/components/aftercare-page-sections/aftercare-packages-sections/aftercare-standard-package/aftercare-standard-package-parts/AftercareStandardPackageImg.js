import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function AftercareStandardPackageImg() {
  return (
    <StaticImage
      className="interior-img-container"
      src="../../../../../images/maintenance2.webp"
      alt="An image depicting a spanner and a screwdriver because that's what we use to fix websites apparently"
      as="div"
      placeholder="blurred"
    />
  );
}
