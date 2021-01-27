import React, { FunctionComponent } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Heading, Box, Flex } from "@chakra-ui/core";
import { MdArrowBack } from "react-icons/md";

import { Layout, SEO, Event, NavBar } from "../components";
import { EventDetails } from "../types";
// import { Navbar } from '../components';

const Events: FunctionComponent<any> = ({ data }) => {
  const events: EventDetails[] = data.allMdx.edges.map(
    ({ node: { frontmatter: eventDetails } }) => eventDetails as EventDetails
  );
  return (
    <Layout>
      {/* <NavBar activeHash={""} setActiveHash={null} /> */}
      <SEO title="events" />
      <Flex
        w={"100%"}
        direction="column"
        // justify="center"
        minHeight={"90vh"}
        py={[2, 10, 30, 30]}
        px={[10, 10, 20, 20]}
      >
        <GatsbyLink to="/">
          <Box as={MdArrowBack} size={"20px"} />
        </GatsbyLink>
        <Heading width={"100%"} mb={[5]} textAlign="center">
          Upcoming Events
        </Heading>
        <Flex maxW="100vw" wrap="wrap" justify="center" align="center">
          {events.map((eventDetails, index) => {
            if (eventDetails.status == "Upcoming") {
              return <Event key={index} {...eventDetails} />;
            }
          })}
        </Flex>
        <Heading width={"100%"} mb={[5]} textAlign="center">
          Past Events
        </Heading>
        <Flex maxW="100vw" wrap="wrap" justify="center" align="center">
          {events.map((eventDetails, index) => {
            if (eventDetails.status == "Past") {
              return <Event key={index} {...eventDetails} />;
            }
          })}
        </Flex>
      </Flex>
    </Layout>
  );
};

export const eventQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/event-posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            date
            imageUrl
            link
            status
          }
        }
      }
    }
  }
`;

export default Events;
