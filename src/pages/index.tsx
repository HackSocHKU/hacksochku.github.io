import React, { FunctionComponent } from "react";

import {
  Home,
  Layout,
  About,
  Sponsors,
  Advisors,
  Team,
  Contact,
  Footer,
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
