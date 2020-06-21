import React, { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/core";

import { Layout, About, Sponsors } from "../components";

const IndexPage: FunctionComponent<{ location: string }> = ({ location }) => {
  return (
    <Layout location={location}>
      <About />
      <Sponsors />
    </Layout>
  );
};

export default IndexPage;
