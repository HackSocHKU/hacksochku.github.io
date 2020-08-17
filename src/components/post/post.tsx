import React, { FunctionComponent } from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Heading, Text, Link } from "@chakra-ui/core";

import { PostDetails } from "../../types";
import { truncateText } from "../../utils";

export const Post: FunctionComponent<PostDetails> = ({
  path,
  title,
  excerpt,
  date,
  author: { name, url },
}) => {
  return (
    <Box mt={2} mb={[4, 4, 8, 8]}>
      <GatsbyLink to={path}>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="#808080">
          {truncateText(excerpt)}
        </Text>
      </GatsbyLink>
      <Box mt={2}>
        <Text>
          {" "}
          {date} |{" "}
          <Link href={url} isExternal>
            {name}
          </Link>{" "}
        </Text>
      </Box>
    </Box>
  );
};
