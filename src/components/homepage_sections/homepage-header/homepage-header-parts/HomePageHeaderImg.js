import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HomePageHeaderImg() {
  return (
    <div className="header-gonzo-container">
      <StaticImage
        src="../../../../images/dab.webp"
        alt="A happy chap doing a little dance. Because we built his website I expect."
        as="div"
        className="Header-gonzo"
        imgClassName="header-gonzo"
        placeholder="blurred"
      />
    </div>
  );
}
