import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SocialMedia() {
  return (
    <div className="footer-item social-media-container">
      <h2 className="footer-subheading">Social Media</h2>
      <div className="social-media-divider">
        <a
          href="https://www.facebook.com/mccabewebdesign"
          className="social-link"
        >
          <StaticImage
            src="../../images/fbicon.webp"
            alt="The Facebook logo"
            as="div"
            className="social-icon-container"
            imgclassName="social-icon"
            placeholder="blurred"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/mccabe_web_design/"
          className="social-link"
        >
          <StaticImage
            src="../../images/instaicon.webp"
            alt="The Instagram logo"
            as="div"
            className="social-icon-container"
            imgclassName="social-icon"
            placeholder="blurred"
            loading="lazy"
          />
        </a>
      </div>

      <a href="https://twitter.com/McCabeWebDesign" className="social-link">
        <StaticImage
          src="../../images/twittericon.webp"
          alt="The Twitter Logo"
          as="div"
          className="social-icon-container"
          imgclassName="social-icon"
          placeholder="blurred"
          loading="lazy"
        />
      </a>
    </div>
  );
}
