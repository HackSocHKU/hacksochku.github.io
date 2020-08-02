import React, { FunctionComponent, useState } from "react";

import {
  NavBar,
  Home,
  Layout,
  About,
  Sponsors,
  Advisors,
  Team,
  Contact,
} from "../components";

const IndexPage: FunctionComponent<> = () => {
  const [activeHash, setActiveHash] = useState("#home");

  return (
    <Layout>
      <NavBar activeHash={activeHash} setActiveHash={setActiveHash} />
      <Home />
      <About />
      <Sponsors />
      <Advisors />
      <Team />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
