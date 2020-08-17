import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { Heading, Box, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components";

const Blog: FunctionComponent<any> = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(
        (
          {
            node: {
              frontmatter: { title, author, date },
            },
          },
          index
        ) => (
          <Box key={index}>
            <Heading>{title}</Heading>
            <Text>by {author.name}</Text>
            <Text>{date}</Text>
          </Box>
        )
      )}
    </Layout>
  );
};

export const blogsQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/blog-posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author {
              name
              url
            }
          }
        }
      }
    }
  }
`;

export default Blog;
