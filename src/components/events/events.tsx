import React from "react";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/core";
import { graphql } from "gatsby";
import { EventDetails } from "../../types";
import { Event } from "../event";

export const Events: FunctionComponent = data => {
  console.log(data);
  const events: EventDetails[] = data.allMdx.edges.map(
    ({ node: { frontmatter: eventDetails } }) => eventDetails as EventDetails
  );
  return (
    <Flex
      id="events"
      px={[10, 20, 30, 40]}
      py={[10, 10, 20, 20]}
      // color="primary"
      align="center"
      textAlign="left"
      direction="column"
      backgroundColor="text"
    >
      <Box>
        <Heading width={"100%"} mb={[5]} color="primary" textAlign="center">
          Upcoming Events
        </Heading>
        <Flex maxW="100vw" wrap="wrap" justify="center" align="center">
          {events.map((eventDetails, index) => (
            <Event key={index} {...eventDetails} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
