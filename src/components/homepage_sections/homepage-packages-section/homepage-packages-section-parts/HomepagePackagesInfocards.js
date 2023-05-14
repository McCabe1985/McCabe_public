import React from "react";
import { Link } from "gatsby";

export default function HomepagePackagesInfocards() {
  return (
    <article className="packages-section-infocard-container">
      <article className="packages-section-infocard">
        <header className="packages-section-infocard-header-container">
          <h3 className="packages-section-infocard-heading">
            Standard Package
          </h3>
        </header>
        <div className="packages-section-infocard-content-container">
          <p className="packages-section-infocard-top-text">What you get</p>
          <ul className="packages-section-infocard-features-list">
            <li className="packages-section-infocard-list-item">
              Up to 3 pages.
            </li>
            <li className="packages-section-infocard-list-item">
              1 year <span>FREE</span> hosting.
            </li>
            <li className="packages-section-infocard-list-item">
              60 hours of web design, development and testing
            </li>
            <li className="packages-section-infocard-list-item">
              A high speed website that boosts conversion
            </li>
            <li className="packages-section-infocard-list-item">
              on site search engine optimization (SEO)
            </li>
            <li className="packages-section-infocard-list-item">
              Submission to Search Engines
            </li>
          </ul>
        </div>
        <div className="packages-section-infocard-price-container">
          <p className="packages-section-infocard-price">From £545</p>
        </div>
      </article>
      <article className="packages-section-infocard">
        <header className="packages-section-infocard-header-container best-choice">
          <h3 className="packages-section-infocard-heading">Pro</h3>
        </header>
        <div className="packages-section-infocard-content-container">
          <p className="packages-section-infocard-top-text">What you get</p>
          <ul className="packages-section-infocard-features-list">
            <li className="packages-section-infocard-list-item">
              All the benefits of the Standard Package but...
            </li>
            <li className="packages-section-infocard-list-item">
              more web pages (up to 5)
            </li>
            <li className="packages-section-infocard-list-item">
              <span>FREE</span> professional copywriting
            </li>
            <li className="packages-section-infocard-list-item">
              Google Analytics implementation
            </li>
            <li className="packages-section-infocard-list-item">
              1 <span>Discounted</span> website redesign before deployment
            </li>
            <li className="packages-section-infocard-list-item">
              1 <span>FREE</span> Logo Design
            </li>
          </ul>
        </div>
        <div className="packages-section-infocard-price-container best-choice-container">
          <p className="packages-section-infocard-price ">From £845</p>
        </div>
      </article>
      <article className="packages-section-infocard">
        <header className="packages-section-infocard-header-container">
          <h3 className="packages-section-infocard-heading">Pro PLUS</h3>
        </header>
        <div className="packages-section-infocard-content-container">
          <p className="packages-section-infocard-top-text">What you get</p>
          <ul className="packages-section-infocard-features-list">
            <li className="packages-section-infocard-list-item">
              everything from the previous packages PLUS
            </li>
            <li className="packages-section-infocard-list-item">
              Professional stock images
            </li>
            <li className="packages-section-infocard-list-item">
              Custom media assets
            </li>
            <li className="packages-section-infocard-list-item">
              Custom animations
            </li>
            <li className="packages-section-infocard-list-item">
              1 <span>FREE</span> Logo <span>RE</span>design
            </li>
            <li className="packages-section-infocard-list-item">
              1 <span>FREE</span> website redesign before deployment
            </li>
          </ul>
        </div>
        <div className="packages-section-infocard-price-container">
          <p className="packages-section-infocard-price">From £1145</p>
        </div>
      </article>
    </article>
  );
}
