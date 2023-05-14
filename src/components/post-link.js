import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const PostLink = ({ post }) => {
  const image = getImage(
    post.frontmatter.image.childImageSharp.gatsbyImageData
  );
  console.log(image);
  return (
    <article className="blogindex-blogcard-container">
      <div className="blogindex-blogcard-img-container">
        <GatsbyImage
          className="blogindex-blogcard-img"
          imgclassname="blogindex-blogcard-image"
          image={image}
          alt={post.frontmatter.title}
          as="div"
        />
      </div>

      <div className="blogindex-blogcard-text-container">
        <h2 className="blogindex-blogcard-heading">{post.frontmatter.title}</h2>
        <p className="blogindex-blogcard-date">{post.frontmatter.date}</p>
        <p className="blogindex-blogcard-description">
          {post.frontmatter.description}
        </p>
      </div>
      <Link to={post.frontmatter.slug} className="blogindex-blogcard-link">
        {post.frontmatter.shortTitle}
      </Link>
    </article>
  );
};
export default PostLink;
