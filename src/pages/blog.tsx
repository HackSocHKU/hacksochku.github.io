import React, { FunctionComponent } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Heading, Box, Flex } from "@chakra-ui/core";
import { MdArrowBack } from "react-icons/md";

import { Layout, SEO, Post } from "../components";
import { PostDetails } from "../types";

const Blog: FunctionComponent<any> = ({ data }) => {
  const posts: PostDetails[] = data.allMdx.edges.map(
    ({ node: { frontmatter: postDetails } }) => postDetails as PostDetails
  );

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex w={"100%"} justify="center" minHeight="100vh">
        <Box w={"min(90%, 600px)"} py={[2, 4, 4, 6]}>
          <GatsbyLink to="/">
            <Box as={MdArrowBack} size={"20px"} />
          </GatsbyLink>
          <Heading mb={[5]}>Hackathon Society blog</Heading>
          {posts.map((postDetails, index) => (
            <Post key={index} {...postDetails} />
          ))}
        </Box>
      </Flex>
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
            path
            title
            excerpt
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
