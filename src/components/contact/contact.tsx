import React, { FunctionComponent } from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/core";
import {
  MdLocationOn as LocationIcon,
  MdEmail as EmailIcon,
} from "react-icons/md";
import './contact.css'

const Address: FunctionComponent = () => (
  <Flex justify="center" align="center" mb={10}>
    <Flex mr={10}>
      <LocationIcon size={40} mx={20} color="#000" />
    </Flex>
    <Flex direction="column">
      <Heading size="lg">Address</Heading>
      <Link href="https://goo.gl/maps/DDXkRxKhJbnjin756" isExternal>
        <Text>
          The University of Hong Kong (HKU), Hong Kong Island, Hong Kong
        </Text>
      </Link>
    </Flex>
  </Flex>
);

const Email: FunctionComponent = () => (
  <Flex justify="center" align="center">
    <Flex mr={10}>
      <EmailIcon size={40} mx={20} color="#000" />
    </Flex>
    <Flex direction="column">
      <Heading size="md">Email</Heading>
      <Link href="mailto:hacksochku@gmail.com">
        <Text>hacksochku@gmail.com</Text>
      </Link>
    </Flex>
  </Flex>
);

export const Contact: FunctionComponent = () => (
  <Flex
    id="contact"
    backgroundColor="primary"
    color="text"
    direction="column"
    p={[5, 10, 20, 20]}
  >
    <Heading textAlign="center" as="h1" size="2xl">
      Contact <span>Us</span>
    </Heading>
    <Flex
      px={[5, 10, 15, 20]}
      py={[10, 10, 20, 20]}
      direction="column"
      align="start"
    >
      <Address />
      <Email />
    </Flex>
  </Flex>
);
