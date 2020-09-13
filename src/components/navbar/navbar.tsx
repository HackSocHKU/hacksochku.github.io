import React, { FunctionComponent } from "react";
import { Flex, Text, Image, Box, useDisclosure } from "@chakra-ui/core";
import { Link } from "gatsby";
import { FiMenu } from "react-icons/fi";

import { Mobile as MobileHeader } from "./mobile";
import { NavItem } from "./navitem";
import { routes } from "./routes";
import hackSocLogo from "../../assets/images/hackSocLogo.png";

interface NavBarComponentProps {
  activeHash: string;
  setActiveHash: (activeHash: string) => void;
}

export const NavBar: FunctionComponent<NavBarComponentProps> = ({
  activeHash,
  setActiveHash,
}) => {
  const disclosure = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      p={[2, 2, 4, 4]}
      w="100vw"
      position="fixed"
      top={0}
      backgroundColor="secondary"
      opacity={0.8}
      zIndex={1}
    >
      <Flex flex={1}>
        <Link to="">
          <Image
            src={hackSocLogo}
            w={[10, 12, 16, 16]}
            h={[10, 12, 16, 16]}
            mx={[5, 5, 20, 20]}
          />
        </Link>
      </Flex>
      <Flex display={["none", "flex", "flex", "flex"]}>
        {routes.map(({ id, text }) => (
          <NavItem
            key={id}
            id={id}
            text={text}
            activeHash={activeHash}
            setActiveHash={setActiveHash}
          ></NavItem>
        ))}
      </Flex>
      <Box
        as={FiMenu}
        size={30}
        cursor="pointer"
        display={["flex", "none", "none", "none"]}
        onClick={disclosure.onOpen}
      />
      <MobileHeader
        disclosure={disclosure}
        activeHash={activeHash}
        setActiveHash={setActiveHash}
      />
    </Flex>
  );
};
