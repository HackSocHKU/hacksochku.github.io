import React, { FunctionComponent } from "react";
import { Heading, Flex } from "@chakra-ui/core";

const NotFoundPage: FunctionComponent = () => (
  <Flex
    backgroundColor="primary"
    h="100vh"
    direction="column"
    justify="center"
    align="center"
  >
    <Heading color="text" as="h1" size="xl">
      You just hit the route that doesn't exist.
    </Heading>
  </Flex>
);

export default NotFoundPage;
