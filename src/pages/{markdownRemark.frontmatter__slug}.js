import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { html } = markdownRemark;
  return (
    <Layout>
      <main className="main-content-container">
        <section
          className="blog-content-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
        author
      }
    }
  }
`;
export const Head = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="description"
      content="We wax lyrical on a multitude of topics related to web design and development, SEO, accessibility and related topics."
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Uh oh It's a Blog Post" />
    <meta
      property="og:description"
      content="We wax lyrical on a multitude of topics related to web design and development, SEO, accessibility and related topics."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://www.mccabe-webdesign.com/blogindex/"
    />
    <meta
      property="og:image"
      content="https://i.postimg.cc/SQMGP7rV/blogpost.png"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <title>McCabe's the Blog Post | McCabe's</title>
  </>
);
