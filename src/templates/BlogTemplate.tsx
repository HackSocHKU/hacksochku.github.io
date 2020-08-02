import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { Flex, Heading, Text, Link, Box } from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../components";
import { MDXProviderComponents } from "./MDXProviderComponents";

const BlogTemplate: FunctionComponent<any> = ({ data }) => {
  const {
    mdx: {
      frontmatter: {
        title,
        date,
        author: { name: authorName, url: authorURL },
      },
      body: content,
    },
  } = data;

  const BlogHeader: FunctionComponent = () => {
    return (
      <>
        <Heading size="xl">{title}</Heading>
        <Text>
          {" "}
          {date} |{" "}
          <Link href={authorURL} isExternal>
            {authorName}
          </Link>{" "}
        </Text>
      </>
    );
  };

  return (
    <Layout>
      <Flex w={"100%"} justify="center">
        <Box w={"min(90%, 600px)"} py={[2, 4, 4, 6]}>
          <BlogHeader />
          <MDXProvider components={MDXProviderComponents()}>
            <MDXRenderer>{content}</MDXRenderer>
          </MDXProvider>
        </Box>
      </Flex>
    </Layout>
  );
};

export const blogQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
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
`;

export default BlogTemplate;
