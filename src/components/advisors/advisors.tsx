import React, { FunctionComponent } from "react";
import { Flex, Grid, Heading } from "@chakra-ui/core";

import { Advisor } from "./advisor";
import { listOfAdvisors } from "./listOfAdvisors";

export const Advisors: FunctionComponent = () => (
  <Flex
    id="team"
    backgroundColor="text"
    direction="column"
    justify="center"
    px={[2, 10, 30, 30]}
    pb={[5, 5, 10, 10]}
    pt={[20, 20, 40, 40]}
  >
    <Heading color="primary" textAlign="center" as="h1" size="2xl">
      <span style={{ fontWeight: "normal" }}>Our</span> Advisors
    </Heading>
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
      ]}
    >
      {listOfAdvisors.map((advisorDetails, index) => (
        <Advisor key={index} advisorDetails={advisorDetails} />
      ))}
    </Grid>
  </Flex>
);
