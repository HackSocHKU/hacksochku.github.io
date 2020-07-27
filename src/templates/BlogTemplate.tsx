import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { Box, Heading, Text, Link } from "@chakra-ui/core";

const BlogTemplate: FunctionComponent<any> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        date,
        author: { name: authorName, website: authorWebsite },
      },
      html,
    },
  } = data;

  return (
    <Box p={[4, 6, 8, 8]}>
      <Heading size="xl">{title}</Heading>
      <Text>
        {" "}
        {date} |{" "}
        <Link href={authorWebsite} isExternal>
          {authorName}
        </Link>{" "}
      </Text>
      <Box py={2}>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Box>
    </Box>
  );
};

export const blogQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author {
          name
          website
        }
      }
    }
  }
`;

export default BlogTemplate;
