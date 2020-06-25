import React, { FunctionComponent, useState } from "react";
import { Flex, Image, Text, Heading, Link, Grid } from "@chakra-ui/core";
import {
  FaLinkedin as LinkedInIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

import "./member.css";

interface MemberDetails {
  name: string;
  role: string;
  picture: string;
  linkedin?: string;
  github?: string;
  description?: string;
}

interface MemberComponentProps {
  memberDetails: MembersDetails;
}

const MemberInfo: FunctionComponent<MemberComponentProps> = ({
  memberDetails: { description, linkedin, github },
}) => (
  <Flex
    className="member-card-back"
    align="center"
    justify="center"
    textAlign="center"
    direction="column"
    p={5}
  >
    <Text>{description}</Text>
    <Flex my={2}>
      {linkedin && (
        <Link className="social-icon" href={linkedin} isExternal mx={1}>
          <LinkedInIcon size={25} color="#000" />
        </Link>
      )}
      {github && (
        <Link className="social-icon" href={github} isExternal mx={1}>
          <GithubIcon size={25} color="#000" />
        </Link>
      )}
    </Flex>
  </Flex>
);

const MemberPicture: FunctionComponent<MemberComponentProps> = ({
  memberDetails: { picture, name, role },
}) => (
  <Grid className="member-card-front" templateRows="80% 20%">
    <Image src={picture} h="100%" w="100%" />
    <Flex
      backgroundColor="primary"
      color="text"
      direction="column"
      justify="center"
      align="center"
      h="100%"
    >
      <Heading size="md">{name}</Heading>
      <Text>{role}</Text>
    </Flex>
  </Grid>
);

export const Member: FunctionComponent<MemberComponentProps> = ({
  memberDetails,
}) => {
  const { picture } = memberDetails;

  return (
    <Flex className="member-card-container">
      <MemberPicture memberDetails={memberDetails} />
      <MemberInfo memberDetails={memberDetails} />
    </Flex>
  );
};
