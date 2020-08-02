import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { Flex, Heading, Text, Link, Box } from "@chakra-ui/core";

import { Layout } from "../components";

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
    <Layout>
      <Flex w={"100%"} align="center" justify="center">
        <Box w={"min(90%, 600px)"} py={[2, 4, 4, 6]}>
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
      </Flex>
    </Layout>
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
