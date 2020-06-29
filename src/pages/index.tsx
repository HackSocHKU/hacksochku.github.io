import React, { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/core";

import {
  Home,
  Layout,
  About,
  Sponsors,
  Team,
  Contact,
  Footer,
  Advisors,
} from "../components";

const IndexPage: FunctionComponent<> = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Sponsors />
      <Advisors />
      <Team />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
