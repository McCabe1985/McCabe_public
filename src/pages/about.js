import React from "react";
import AboutpageContent from "../components/aboutpage-content/AboutpageContent";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout>
      <main className="main-content-container">
        <AboutpageContent />
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
      content="We are a professional team of expert web designers and web developers in Sussex. Contact us today!"
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="About McCabe's" />
    <meta
      property="og:description"
      content="We are a professional team of expert web designers and web developers in Sussex. Contact us today!"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.mccabe-webdesign.com/about/" />
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
    <title>About us | McCabe's</title>
  </>
);
