import React from "react";
import Layout from "../components/Layout";
import HomePageTrustpilotWidget from "../components/homepage_sections/homepage-trustpilot-widget/HomePageTrustpilotWidget";
import HomepageHeader from "../components/homepage_sections/homepage-header/HomepageHeader";
import HomepageServiceSection from "../components/homepage_sections/homepage-services-section/HomepageServiceSection";
import HomepageFeaturesSection from "../components/homepage_sections/homepage-features-section/HomepageFeaturesSection";
import HomepageTestimonialsSection from "../components/homepage_sections/homepage-testimonials-section/HomepageTestimonialsSection";
import HomepagePackagesSection from "../components/homepage_sections/homepage-packages-section/HomepagePackagesSection";

export default function Home() {
  return (
    <Layout>
      <main className="main-content-container">
        <HomePageTrustpilotWidget />
        <HomepageHeader />
        <HomepageServiceSection />
        <HomepageTestimonialsSection />
        <HomepageFeaturesSection />
        <HomepagePackagesSection />
      </main>
    </Layout>
  );
}

export const Head = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="description"
      content="Looking for professional website design and web development services in Sussex? McCabe Web Design has got you covered! Our experienced team specializes in creating custom, responsive websites that will help your business thrive online. Contact us today to learn more!"
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Affordable Web Design in Sussex" />
    <meta
      property="og:description"
      content="Get noticed online with custom website design and development services from McCabe Web Design in Sussex. Our expert team creates responsive, user-friendly websites that drive results. Contact us today!"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.mccabe-webdesign.com" />
    <meta
      property="og:image"
      content="https://i.postimg.cc/qMR5GPcX/mccabe-banner.png"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <title>Web Design services in Sussex | McCabe's</title>
  </>
);
