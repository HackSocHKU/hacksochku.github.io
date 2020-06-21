import React, { FunctionComponent } from "react";
import { Flex, Heading } from "@chakra-ui/core";
import Typewriter from "typewriter-effect";

import { Social } from "./social";

export const Home: FunctionComponent = () => (
  <Flex
    id="home"
    h="100vh"
    backgroundColor="text"
    align="center"
    justify="center"
    textAlign="center"
    direction="column"
  >
    <Heading color="primary" as="h1" size="2xl" fontSize={[50, 75, 100, 100]}>
      <Typewriter
        options={{
          strings: ["HKU Hackathon Society"],
          autoStart: true,
          loop: true,
        }}
      />
    </Heading>
    <Social />
  </Flex>
);
