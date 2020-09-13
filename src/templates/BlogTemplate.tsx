import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { Flex, Heading, Text, Link, Box } from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import { Layout, SEO } from "../components";
import { MDXProviderComponents } from "./MDXProviderComponents";

deckDeckGoHighlightElement();

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
          {authorURL ? (
            <Link href={authorURL} isExternal>
              {authorName}
            </Link>
          ) : (
            <>{authorName}</>
          )}
        </Text>
      </>
    );
  };

  return (
    <Layout>
      <SEO title={title} />
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
