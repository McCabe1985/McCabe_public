import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
export default function NotFound() {
  return (
    <Layout>
      <main className="main-content-container">
        <header className="not-found-header">
          <h1 className="not-found-heading"> Uh oh...</h1>
          <p className="not-found-subheading">Page not found...</p>
        </header>

        <p className="not-found-text">
          The page you have requested hasn't been found. Please try again later,
          or get in touch to report the problem.
        </p>
        <Link className="orange-link" to="/">
          Go Back
        </Link>
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
      content="This is a 404 page, nothing to see here. Literally!"
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Affordable Web Design in Sussex" />
    <meta
      property="og:description"
      content="This is a 404 page, nothing to see here. Literally!"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.mccabe-webdesign.com/404" />
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
    <title>uh oh 404 | McCabe's</title>
  </>
);
