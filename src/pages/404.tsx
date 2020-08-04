import React, { FunctionComponent } from "react";
import { Heading, Flex } from "@chakra-ui/core";
import { Link } from "gatsby";

import { Layout } from "../components";

const NotFoundPage: FunctionComponent = () => {
  return (
    <Layout>
      <Flex
        backgroundColor="primary"
        h="100vh"
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
      >
        <Heading color="text" as="h3" size="xl" my={3}>
          We can't seem to find the page you are looking for.
        </Heading>
        <Link color="text" to="/">
          go back to homepage
        </Link>
      </Flex>
    </Layout>
  );
};

export default NotFoundPage;
