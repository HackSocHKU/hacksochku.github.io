import React, { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/core";

import { Home, Layout, About, Sponsors, Team, Contact } from "../components";

const IndexPage: FunctionComponent<{ location: string }> = ({ location }) => {
  return (
    <Layout location={location}>
      <Home />
      <About />
      <Sponsors />
      <Team />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
