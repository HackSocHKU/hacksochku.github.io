import React, { FunctionComponent } from "react";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/core";
import { Link } from "gatsby";

const visionDescription = `The Hackathon Society is working towards building a community for all students from various disciplines. 
  The  goal is to remove the myths about Hackathon and make it accessible to each and everyone. 
  We plan to achieve this goal by creating activities across campus and opportunities for cross-disciplinary, 
  as well as multinational, collaborative projects. 
  By promoting an attitude favouring curiosity, creativity and collaboration, 
  we hope to inspire students to grow their networks and take initiative to bring their ideas to life. 
  With this in mind, we welcome members from all degree programs who have an interest, 
  or simply wish to learn how to stay safe in the information age.`;

const AboutContent: FunctionComponent = () => (
  <Box>
    <Heading textAlign="center" as="h1" size="2xl">
      About <span style={{ fontWeight: "normal" }}>Us</span>
    </Heading>
    <Text fontSize={["md", "md", "lg", "lg"]} my={5}>
      We are a non-profit student organization at The University of Hong Kong
      and our society aims to bring together a group of people who loving
      bringing ideas to reality. We welcome everyone who is enthusiastic to
      learn and build.
    </Text>
    <Heading textAlign="center" as="h3" size="xl">
      Why "Hackathon Society"?
    </Heading>
    <Text fontSize={["md", "md", "lg", "lg"]} my={5}>
      We believe that creative prospers when nurtured. Our motto is "fail often,
      fail fast". We encourage our members to do new things and learn from their
      mistakes. We do this by organizing small hackathon internally and
      externally all year round. The Hackathon Society has also taken on the
      responsibility of organizing a Hackathon which will cater students from
      all over the globe to increase cross-cultural collaboration.
    </Text>
  </Box>
);

const VisionContent: FunctionCompoent = () => (
  <Box>
    <Heading textAlign="center" as="h1" size="lg" p={5}>
      Our Vision
    </Heading>
    <Text fontSize={["md", "md", "lg", "lg"]}>{visionDescription}</Text>
  </Box>
);

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
    <AboutContent />
    <VisionContent />
  </Flex>
);
