import React, { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/core";

import { NavBar } from "./navbar";

export const Layout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <>
    <NavBar />
    <Box as="main" flexDirection="column">
      {children}
    </Box>
  </>
);
