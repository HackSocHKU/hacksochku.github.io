import React, { FunctionComponent } from "react";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/core";
import { Link } from "gatsby";

const aboutDescription =
  "We are a non-profit student organization at The University of Hong Kong. Our aim is to create an environment of innovation, fostering entrepreneurial minds, by providing our members with the relevant skills and experience to participate in hackathons and encourage them to put their capabilities towards building extraordinary things. The society plans to work towards this goal by organizing workshops on hackathon-relevant skills and providing members with a platform to collaborate and actualise their dreams. This opportunity has been made possible with the help of our very capable sponsors.";
const aboutDescription2 =
  "HackSoc has taken on the responsibility of organizing an annual hackathon, sponsored by the most prestigious university in Hong Kong, to bring together a community of tech-loving individuals and solve real-world problems. During the hackathon, we look forward to organizing mini-challenges and competitions to promote friendly competition and interaction between the participants.";
const visionDescription =
  "The Hackathon Society is working towards building a community for all students. We plan to achieve this goal by creating activities across campus and opportunities for cross-disciplinary, as well as multinational, collaborative projects. By promoting an attitude favouring curiosity, creativity and collaboration, we hope to inspire students to grow their networks and take initiative to bring their ideas to life.";

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
    <Link to="/advisors">
      <Button variant="outlined" backgroundColor="text" color="primary" m={5}>
        See our advisors
      </Button>
    </Link>
  </Flex>
);
