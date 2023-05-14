import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";

const blogindex = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <main className="main-content-container">
        <section className="blogs-container">{Posts}</section>
      </main>
    </Layout>
  );
};

export default blogindex;

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
            category
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 500
                  quality: 50
                )
              }
            }
            description
            shortTitle
          }
        }
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
      content="We are constantly improving our web design services, we talk about pertinent topics in our Blog!"
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="McCabe's the Blog" />
    <meta
      property="og:description"
      content="We are constantly improving our web design services, we talk about pertinent topics in our Blog!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://www.mccabe-webdesign.com/blogindex/"
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
    <title>Blog Index | McCabe's</title>
  </>
);
