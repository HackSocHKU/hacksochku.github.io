import React from "react";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/core";

const eventsDescription =
  "We plan to organize an Annual proprietary Hackathon which will not just be limited to HKU students but students from other universities as well. The main purpose behind this is to promote cross-discipline collaboration and give our students a platform to connect with like-minded individuals. This would promote creativity and curiosity among our students which will help them take the initiative to start their own projects. We will also have workshops to prepare the potential participants for the hackathon.";

const EventContent: FunctionComponent = () => (
  <Box>
    <Heading textAlign="center" as="h1" size="lg" p={5}>
      Events
    </Heading>
    <Text fontSize={["md", "md", "lg", "lg"]}>{eventsDescription}</Text>
    <Flex direction="center" justify="center" py={3}>
      <Button backgroundColor="primary" color="text" _hover={{ bg: "primary" }}>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeIUiGCUrceRNAir7Q1ht4rGKEfGeJsWwQmTMT_R75vuicdZg/viewform?usp=sf_link"
          isExternal
        >
          Register
        </Link>
      </Button>
    </Flex>
  </Box>
);

export const Events: FunctionComponent = () => (
  <Flex
    id="events"
    px={[10, 20, 30, 40]}
    py={[10, 10, 20, 20]}
    color="primary"
    align="center"
    textAlign="left"
    direction="column"
    backgroundColor="text"
  >
    <EventContent />
  </Flex>
);
