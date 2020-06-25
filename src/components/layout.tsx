import React, { FunctionComponent, ReactNode, useState } from "react";
import { Box } from "@chakra-ui/core";

import { NavBar } from "./navbar";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

interface LayoutComponentProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutComponentProps> = ({
  children,
}) => {
  const [activeHash, setActiveHash] = useState("#home");

  return (
    <>
      <NavBar activeHash={activeHash} setActiveHash={setActiveHash} />
      <Box as="main" flexDirection="column">
        {children}
      </Box>
    </>
  );
};
