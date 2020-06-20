import React, { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/core";

import { About, Sponsors } from "../components";

const IndexPage: FunctionComponent = () => {
  return (
    <Box backgroundColor="primary">
      <About />
      <Sponsors />
    </Box>
  );
};

export default IndexPage;
