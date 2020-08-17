import React from "react";
import { Text, Heading, Code, Flex } from "@chakra-ui/core";
import { MDXProviderComponentsProp } from "@mdx-js/react";

export const MDXProviderComponents = (): MDXProviderComponentsProp => {
  return {
    p: props => <Text marginY={4} {...props} />,
    h1: props => <Heading marginY={4} as={`h1`} size="2xl" {...props} />,
    h2: props => <Heading marginY={4} as={`h2`} size="xl" {...props} />,
    h3: props => <Heading marginY={4} as={`h3`} size="l" {...props} />,
    h4: props => <Heading marginY={4} as={`h4`} size="md" {...props} />,
    h5: props => <Heading marginY={4} as={`h5`} size="sm" {...props} />,
    h6: props => <Heading marginY={4} as={`h6`} size="xs" {...props} />,
    code: props => (
      <Flex as="pre" justify="center">
        <Code
          style={{ overflowX: "scroll" }}
          w="100%"
          p={2}
          borderRadius={"md"}
          variantColor={"blue"}
          color={"text"}
          {...props}
        />
      </Flex>
    ),
  };
};
