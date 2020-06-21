import React, { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/core";

import { NavBar } from "./navbar";
import "./layout.css";

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
