import React from "react";
import Layout from "../components/Layout";
import ContactPageContents from "../components/contact-page/ContactPageContents";
export default function contact() {
  return (
    <Layout>
      <main className="main-content-container">
        <ContactPageContents />
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
      content="Contact us to book an online appointment and discuss your professional web design needs."
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Affordable Web Design in Sussex" />
    <meta
      property="og:description"
      content="Contact us to book an online appointment and discuss your professional web design needs."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://www.mccabe-webdesign.com/contact/"
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
    <title>Contact us | McCabe's</title>
  </>
);
