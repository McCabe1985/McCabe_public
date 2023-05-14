import React from "react";
import TrustPilotStar from "../../../TrustPilotStar";

export default function HomepageTestimonialsSectionText() {
  return (
    <section className="testimonials-section-text-area-container">
      <article className="testimonials-section-testimonialcard">
        <a
          href="https://www.smartwoodflooring-scotland.com/"
          className="testimonials-section-testimonialcard-link"
        >
          SmartWood Flooring Scotland
        </a>
        <hr />
        <div className="testimonials-section-testimonialscard-rating">
          <TrustPilotStar />
          <TrustPilotStar />
          <TrustPilotStar />
          <TrustPilotStar />
          <TrustPilotStar />
        </div>
        <h3 className="testimonialscard-heading">
          Patrick Designed My Website
        </h3>
        <p className="testimonialscard-text">
          Patrick designed my website, he understood what I was asking, he
          listened to all my ideas and took his time to find out about the
          business he asked lots of questions he brought my ideas to life and he
          blew me away. I highly recommend Patrick he’s hard working and has an
          Amazing eye for detail.
        </p>
        <p className="testimonial-card-date">
          <span className="testimonial-card-bold-text">
            Date of experience:
          </span>
          09 January 2023
        </p>
      </article>
    </section>
  );
}
