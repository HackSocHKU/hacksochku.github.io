import React, { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/core";

import { Home, Layout, About, Sponsors, Contact } from "../components";

const IndexPage: FunctionComponent<{ location: string }> = ({ location }) => {
  return (
    <Layout location={location}>
      <Home />
      <About />
      <Sponsors />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
