import React, { FunctionComponent } from "react";
import { Flex, Heading } from "@chakra-ui/core";

import { Advisor } from "./advisor";
import { listOfAdvisors } from "./listOfAdvisors";

export const Advisors: FunctionComponent = () => (
  <Flex
    id="team"
    backgroundColor="text"
    direction="column"
    justify="center"
    px={[2, 10, 30, 30]}
    py={[10, 10, 20, 20]}
  >
    <Heading color="primary" textAlign="center" as="h1" size="2xl">
      <span style={{ fontWeight: "normal" }}>Our</span> Advisors
    </Heading>
    <Flex maxW="100vw" wrap="wrap" align="center" justify="center">
      {listOfAdvisors.map((advisorDetails, index) => (
        <Advisor key={index} advisorDetails={advisorDetails} />
      ))}
    </Flex>
  </Flex>
);
