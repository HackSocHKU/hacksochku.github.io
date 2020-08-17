import React, { FunctionComponent, useState } from "react";

import { SEO } from "../components";

import {
  NavBar,
  Home,
  Layout,
  About,
  Events,
  Sponsors,
  Advisors,
  Team,
  Contact,
} from "../components";

const IndexPage: FunctionComponent<> = () => {
  const [activeHash, setActiveHash] = useState("#home");

  return (
    <Layout>
      <SEO title="Home" />
      <NavBar activeHash={activeHash} setActiveHash={setActiveHash} />
      <Home />
      <About />
      <Events />
      <Sponsors />
      <Advisors />
      <Team />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
