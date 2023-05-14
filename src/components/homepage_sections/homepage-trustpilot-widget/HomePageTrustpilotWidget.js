import React from "react";

import TrustPilotStar from "../../TrustPilotStar";
export default function HomePageTrustpilotWidget() {
  return (
    <section className="trustpilot-widget-container">
      <p className="trustpilot-widget-text">
        See our reviews on{" "}
        <span className="trustpilot-star">
          <TrustPilotStar />
        </span>
        <a
          href="https://uk.trustpilot.com/review/mccabe-webdesign.com"
          className="trustpilot-link"
          rel="nofollow"
        >
          {" "}
          Trustpilot
        </a>
      </p>
    </section>
  );
}
