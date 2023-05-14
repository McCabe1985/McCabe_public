import React from "react";
import { Link } from "gatsby";

export default function ServicepageCoreWebVitalsSectionText() {
  return (
    <section className="interior-text-container">
      <h2 className="interior-section-heading">Core Web Vitals</h2>
      <p className="interior-section-text">
        Have you ever tried to access a webpage only to wait so long for it to
        load that you eventually hit the back button and went elsewhere? Of
        course, you have; we all have. These instances are known as bouncebacks
        and are tracked by Google and other search engines, which then penalize
        websites that cause an excessive amount of bouncebacks by lowering their
        search result rankings.
      </p>
      <p className="interior-section-text">
        Ensuring that your website is well-optimized with good Core Web Vitals
        is essential for creating an effective online presence. Slow loading
        times, which can be caused by shoddy development practices or the use of
        page builders and WordPress, can have a significant impact on your
        website's performance, leading to poor Core Web Vitals scores.
      </p>
      <p className="interior-section-text">
        This isn't just a matter of vanity - search engines like Google track
        metrics like load speed and penalize websites with poor performance by
        ranking them lower in search results. In short, a low-performing website
        can be a death knell for any business.
      </p>
      <p className="interior-section-text">
        That's why at McCabe's, we prioritize optimizing Core Web Vitals
        alongside other aspects of web development, ensuring that your website
        not only looks great, but performs great as well.
      </p>
      <div className="interior-text-link-container">
        <Link to="/contact/" className="orange-link">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
