import React, { FunctionComponent, useState } from "react";
import { Flex, Image, Box, Text } from "@chakra-ui/core";

import "./member.css";

interface MemberDetails {
  name: string;
  role: string;
  picture: string;
  linkedin?: string;
}

interface MemberComponentProps {
  memberDetails: MembersDetails;
}

export const Member: FunctionComponent<MemberComponentProps> = ({
  memberDetails: { name, role, picture, linkedin },
}) => {
  return (
    <Flex className="member-card-container" m={5}>
      <Image src={picture} w={250} h={300} borderRadius={5} />
    </Flex>
  );
};
