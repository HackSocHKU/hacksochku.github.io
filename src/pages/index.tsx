import React, { FunctionComponent, useState } from "react";
import { graphql } from "gatsby";
import { SEO } from "../components";
import { EventDetails } from "../types";

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

const IndexPage: FunctionComponent<any> = ({ data }) => {
  // const events: EventDetails[] = data.allMdx.edges.map(
  //   ({ node: { frontmatter: eventDetails } }) => eventDetails as EventDetails
  // );
  const [activeHash, setActiveHash] = useState("#home");

  return (
    <Layout>
      <SEO title="Home" />
      <NavBar activeHash={activeHash} setActiveHash={setActiveHash} />
      <Home />
      <About />
      <Events {...data} />
      <Sponsors />
      <Advisors />
      <Team />
      <Contact />
    </Layout>
  );
};

export const eventQuery = graphql`
  query {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/src/event-posts/" }
        frontmatter: { status: { eq: "Upcoming" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            date
            imageUrl
            link
          }
        }
      }
    }
  }
`;

export default IndexPage;
