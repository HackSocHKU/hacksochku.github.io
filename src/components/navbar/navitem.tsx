import React, { FunctionComponent } from "react";
import { Text } from "@chakra-ui/core";
import { Link } from "gatsby";

interface NavItemComponentProps {
  id: string;
  text: string;
  activeHash: string;
  setActiveHash: (activeHash: string) => void;
  isPage?: boolean;
}

export const NavItem: FunctionComponent<NavItemComponentProps> = ({
  id,
  text,
  activeHash,
  setActiveHash,
  isPage,
}) => {
  return (
    <Link
      to={isPage ? `/${id}` : `#${id}`}
      onClick={isPage ? null : () => setActiveHash(`#${id}`)}
    >
      <Text
        color={activeHash === `#${id}` ? "text" : "navItem"}
        px={[1, 1, 2, 2]}
        fontSize={["sm", "md", "lg", "lg"]}
        fontWeight={activeHash === `#${id}` ? 700 : 500}
      >
        {text}
      </Text>
    </Link>
  );
};
