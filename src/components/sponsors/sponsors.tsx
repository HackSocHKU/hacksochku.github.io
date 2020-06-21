import React, { FunctionComponent } from "react";
import { Flex, Link, Heading } from "@chakra-ui/core";

import { Sponsor } from "./sponsor";
import { listOfSponsors } from "./listOfSponsors";

export const Sponsors: FunctionComponent = () => (
  <Flex
    id="sponsors"
    backgroundColor="primary"
    p={[10, 10, 20, 20]}
    direction="column"
    align="center"
  >
    <Heading color="text" as="h1" size="2xl">
      Sponsors
    </Heading>
    <Flex maxW="100vw" wrap="wrap" align="center" justify="center" my={5}>
      {listOfSponsors.map((sponsorDetail, index) => (
        <Sponsor key={index} detail={sponsorDetail} />
      ))}
    </Flex>
  </Flex>
);
