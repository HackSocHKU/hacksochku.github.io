import React, { FunctionComponent } from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";
import './about.css'

const aboutDescription =
  "We are a not-for-profit student organization at The University of Hong Kong. Our aim is to foster creative and entrepreneurial minds and provide them with the necessary skills and confidence to participate in hackathons and go on to build extraordinary things in the future. We promote an environment of original thinking. The society aims to conduct regular workshops for activities such as design thinking, public speaking, app development, business development and much more. We also aim to bring these ideas and novel products to reality with the help of our very capable sponsors.";
const aboutDescription2 =
  "HackSoc has taken on the responsibility for organising a hackathon sponsored by the most prestigious university in the country. If you need a break from your project during hackathons, other activities such as competitive coding, website designing comps, gaming competitions will be going on the side.";
const visionDescription =
  "Hackathon society is aimed towards including international students in more activities across the campus and creating a healthy relationship between locals and the internationals. We also want to promote creativity and curiosity among students so that they take initiatives to start their own university funded projects.";

export const About: FunctionComponent = () => (
  <Flex
    id="about"
    px={[10, 20, 30, 40]}
    py={[10, 10, 20, 20]}
    color="text"
    align="center"
    textAlign="left"
    direction="column"
    backgroundColor="secondary"
  >
    <Box>
      <Heading textAlign="center" as="h1" size="2xl">
        About <span>Us</span>
      </Heading>
      <Text fontSize={["md", "md", "lg", "lg"]} my={5}>
        {aboutDescription}
      </Text>
      <Text fontSize={["md", "md", "lg", "lg"]} my={5}>
        {aboutDescription2}
      </Text>
    </Box>
    <Box>
      <Heading textAlign="center" as="h1" size="lg" p={5}>
        Our Vision
      </Heading>
      <Text fontSize={["md", "md", "lg", "lg"]}>{visionDescription}</Text>
    </Box>
  </Flex>
);
