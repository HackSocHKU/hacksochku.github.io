import React, { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/core";

import { NavBar } from "./navbar";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

interface LayoutComponentProps {
  children: ReactNode;
  locations: string;
}

export const Layout: FunctionComponent<LayoutComponentProps> = ({
  children,
  location,
}) => (
  <>
    <NavBar location={location} />
    <Box as="main" flexDirection="column">
      {children}
    </Box>
  </>
);
