import React, { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/core";

import { Footer } from "./footer";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

interface LayoutComponentProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutComponentProps> = ({
  children,
}) => {
  return (
    <Box>
      <Box
        as="main"
        flexDirection="column"
        backgroundColor="primary"
        color="text"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
