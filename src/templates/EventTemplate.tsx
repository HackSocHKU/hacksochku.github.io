import React, { FunctionComponent } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Flex, Heading, Text, Link, Box, Image, Button } from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { MdArrowBack, MdTimer } from "react-icons/md";

import { Layout, SEO } from "../components";
import { MDXProviderComponents } from "./MDXProviderComponents";

deckDeckGoHighlightElement();
require(`katex/dist/katex.min.css`);

const EventTemplate: FunctionComponent<any> = ({ data }) => {
  const {
    mdx: {
      frontmatter: { path, title, excerpt, date, imageUrl, link },
      body: content,
    },
  } = data;

  const EventHeader: FunctionComponent = () => {
    return (
      <>
        <Flex w={"100%"}>
          <GatsbyLink to="/events">
            <Box as={MdArrowBack} size={"20px"}></Box>
          </GatsbyLink>
          <Flex justify="center" align="center" my={5} mx={20}>
            <Image src={imageUrl} width={"70%"} />
            <Flex direction="column" justify="center" align="center">
              <Heading size="2xl" px={10} py={10}>
                {title}
              </Heading>
              <Text fontSize="xl">
                <Flex align="center" justify="center">
                  <MdTimer />
                  {date}
                </Flex>
              </Text>
              <Button p={[2, 2, 4, 4]} background="#bbbbbb" m={[2, 2, 4, 4]}>
                {" "}
                <Link href={link} isExternal>
                  Register
                </Link>{" "}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  };

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Flex w={"100%"} justify="center">
        <Box w={"90%"} py={[2, 4, 4, 6]}>
          <EventHeader />
          <MDXProvider components={MDXProviderComponents()}>
            <MDXRenderer>{content}</MDXRenderer>
          </MDXProvider>
        </Box>
      </Flex>
    </Layout>
  );
};

export const eventQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        date
        path
        excerpt
        date
        imageUrl
        link
      }
    }
  }
`;

export default EventTemplate;
