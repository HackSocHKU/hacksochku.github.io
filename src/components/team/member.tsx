import React, { FunctionComponent } from "react";
import { Flex, Image, Box } from "@chakra-ui/core";

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
    <Flex direction="column" justify="center" m={5}>
      <Image src={picture} w={40} h={40} />
    </Flex>
  );
};
