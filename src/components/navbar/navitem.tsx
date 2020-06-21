import React, { FunctionComponent } from "react";
import { Text } from "@chakra-ui/core";
import { Link } from "gatsby";

interface NavItemComponentProps {
  id: string;
  text: string;
  loocationHash: string;
}

export const NavItem: FunctionComponent<NavItemComponentProps> = ({
  id,
  text,
  locationHash,
}) => (
  <Link to={`/#${id}`}>
    <Text
      color={locationHash === `#${id}` ? "text" : "navItem"}
      px={[1, 1, 2, 2]}
      fontSize={["sm", "md", "lg", "lg"]}
      fontWeight={500}
    >
      {text}
    </Text>
  </Link>
);
