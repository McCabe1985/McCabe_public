import React from "react";
import HomepageHeaderText from "./homepage-header-parts/HomepageHeaderText";
import HomePageHeaderImg from "./homepage-header-parts/HomePageHeaderImg";

export default function HomepageHeader() {
  return (
    <header className="homepage-header-container">
      <HomepageHeaderText />
      <HomePageHeaderImg />
    </header>
  );
}
