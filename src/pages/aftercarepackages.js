import React from "react";
import Layout from "../components/Layout";
import AftercareSection from "../components/aftercare-page-sections/AftercareSection";
export default function aftercarepackages() {
  return (
    <Layout>
      <main className="main-content-container">
        <AftercareSection />
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
      content="We provide a comprehensive range of maintenance, content management and e-commerce packages for small businesses in Sussex. Contact us today!"
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Affordable Web Design in Sussex" />
    <meta
      property="og:description"
      content="GWe provide a comprehensive range of maintenance, content management and e-commerce packages for small businesses in Sussex. Contact us today!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://www.mccabe-webdesign.com/aftercarepackages/"
    />
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
    <title>Aftercare packages | McCabe's</title>
  </>
);
