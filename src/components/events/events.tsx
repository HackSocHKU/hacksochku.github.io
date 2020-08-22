import React from "react";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/core";

const eventsDescription =
  "Hackathon Society brings to you a fast paced challenge for everyone who loves to brainstorm. This event requires no coding or technical expertise. We're looking for fresh, innovative ideas. Hackathon Society introduces IDEATHON, a fast-paced challenge for everyone who loves to LEARN and BUILD something cool. We are fortunate to have Mr Cesar Jung Harada to share his experiences and give expert advice on Design Thinking.";

const EventContent: FunctionComponent = () => (
  <Box>
    <Heading textAlign="center" as="h1" size="lg" p={5}>
      Events
    </Heading>
    <Text fontSize={["md", "md", "lg", "lg"]}>{eventsDescription}</Text>
    <Flex direction="center" justify="center" py={3}>
      <Button backgroundColor="primary" color="text" _hover={{ bg: "primary" }}>
        <Link href="https://forms.gle/UQTkp59ZK6jZNNzb8" isExternal>
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
