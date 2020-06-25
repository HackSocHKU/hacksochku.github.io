import React, { FunctionComponent, useState } from "react";
import { Flex, Image, Text, Heading, Link } from "@chakra-ui/core";
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
}

interface MemberComponentProps {
  memberDetails: MembersDetails;
}

const MemberInfo: FunctionComponent<MemberComponentProps> = ({
  memberDetails: { name, role, linkedin, github },
}) => (
  <Flex
    className="member-card-back"
    align="center"
    justify="center"
    direction="column"
  >
    <Heading size="lg">{name}</Heading>
    <Text>{role}</Text>
    <Flex my={2}>
      {linkedin && (
        <Link href={linkedin} isExternal mx={1}>
          <LinkedInIcon size={20} color="#000" />
        </Link>
      )}
      {github && (
        <Link href={github} isExternal mx={1}>
          <GithubIcon size={20} color="#000" />
        </Link>
      )}
    </Flex>
  </Flex>
);

export const Member: FunctionComponent<MemberComponentProps> = ({
  memberDetails,
}) => {
  const { picture } = memberDetails;

  return (
    <Flex className="member-card-container">
      <Image src={picture} className="member-card-front" />
      <MemberInfo memberDetails={memberDetails} />
    </Flex>
  );
};
