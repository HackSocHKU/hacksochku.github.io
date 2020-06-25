import React, { FunctionComponent } from "react";
import { Flex, Text, Link } from "@chakra-ui/core";

export const Footer: FunctionComponent = () => (
  <Flex
    backgroundColor="text"
    justify="center"
    textAlign="center"
    p={[5, 10, 10, 10]}
  >
    <Text color="primary">
      All rights reserved | Developed by&nbsp;
      <Link href="">HKU Hackathon Society</Link>
    </Text>
  </Flex>
);
