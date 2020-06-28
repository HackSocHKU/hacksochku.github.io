import React, { FunctionComponent } from "react";
import { Flex, Heading } from "@chakra-ui/core";
import Typewriter from "typewriter-effect";

import { Social } from "./social";
import "./home.css";

export const Home: FunctionComponent = () => (
  <Flex
    id="home"
    h="100vh"
    backgroundColor="white"
    align="center"
    justify="center"
    textAlign="center"
    direction="column"
  >
    <Heading
      color="black"
      as="h1"
      size="2xl"
      fontSize={[45, 75, 100, 100]}
      display="flex"
    >
      {"<"}
      <Typewriter
        options={{
          strings: ["HackSoc"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
      {"/>"}
    </Heading>
    <Social />
  </Flex>
);
