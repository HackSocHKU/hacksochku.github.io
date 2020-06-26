import React, { FunctionComponent } from "react";
import { Flex, Heading } from "@chakra-ui/core";

import { Member } from "./member";
import { listOfMembers } from "./listOfMembers";

export const Team: FunctionComponent = () => (
  <Flex
    id="team"
    backgroundColor="text"
    direction="column"
    justify="center"
    px={[10, 20, 30, 30]}
    py={[10, 10, 20, 20]}
  >
    <Heading color="primary" textAlign="center" as="h1" size="2xl">
      <span style={{ fontWeight: "normal" }}>The</span> Team
    </Heading>
    <Flex maxW="100vw" wrap="wrap" align="center" justify="center">
      {listOfMembers.map((memberDetails, index) => (
        <Member key={index} memberDetails={memberDetails} />
      ))}
    </Flex>
  </Flex>
);
