import React, { FunctionComponent } from "react";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/core";
import { Link } from "gatsby";

const aboutDescription =
  "We are a non-profit student organization at The University of Hong Kong and welcome all ability levels, from veteran to “Hello World!”. We teach how to tackle a hackathon which is nothing related to “Hacking Computers”. Our aim is to create an environment of innovation, fostering entrepreneurial minds, by providing you with the relevant skills and experience to participate in hackathons and use your capabilities towards building extraordinary things. To achieve these goals, we plan to organize tech talks, done by a student/staff member or inviting a guest speaker to campus. We also aim to share experiences and interest, for example one member may be particularly interested in or skilled with a certain scripting language and could provide an ad hoc crash courses for curious members, preparing them for events.";
const aboutDescription2 =
  "HackSoc has taken on the responsibility of organizing an annual hackathon, sponsored by the most prestigious university in Hong Kong, to bring together a community of tech-loving individuals and solve real-world problems. It will also be accompanied by mini-challenges and competitions to promote helpful competition and interaction between the participants. We aspire to have a friendly, collaborative environment of people creating great things with the skills instilled in them throughout the course of membership which are massively sought after in any industry.";
const visionDescription =
  "The Hackathon Society is working towards building a community for all students from various disciplines. The main goal is to remove the myths about Hackathon and make it accessible to each and everyone. We plan to achieve this goal by creating activities across campus and opportunities for cross-disciplinary, as well as multinational, collaborative projects. By promoting an attitude favouring curiosity, creativity and collaboration, we hope to inspire students to grow their networks and take initiative to bring their ideas to life. With this in mind, we welcome members from all degree programs who have an interest, or simply wish to learn how to stay safe in the information age.";

const AboutContent: FunctionComponent = () => (
  <Box>
    <Heading textAlign="center" as="h1" size="2xl">
      About <span style={{ fontWeight: "normal" }}>Us</span>
    </Heading>
    <Text fontSize={["md", "md", "lg", "lg"]} my={5}>
      {aboutDescription}
    </Text>
    <Text fontSize={["md", "md", "lg", "lg"]} my={5}>
      {aboutDescription2}
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
