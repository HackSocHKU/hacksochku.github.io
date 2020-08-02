import React, { FunctionComponent } from "react";
import { Heading, Flex } from "@chakra-ui/core";

import { Layout } from "../components";

const NotFoundPage: FunctionComponent = () => (
  <Layout>
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
  </Layout>
);

export default NotFoundPage;
