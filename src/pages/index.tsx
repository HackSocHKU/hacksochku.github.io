import React, { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/core";

import { About } from "../components";

const IndexPage: FunctionComponent = () => {
  return (
    <Box backgroundColor="primary">
      <About />
    </Box>
  );
};

export default IndexPage;
