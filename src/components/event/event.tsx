import React, { FunctionComponent } from "react";
import { Heading, Box, Flex, Text, Image, Grid, Link } from "@chakra-ui/core";
import { EventDetails } from "../../types";
import { Link as GatsbyLink } from "gatsby";
import GatsbyImage from "gatsby-image";
import "./event.css";

const Event: FunctionComponent<EventDetails> = ({
  path,
  title,
  excerpt,
  date,
  imageUrl,
  link,
}) => {
  return (
    <Grid className="event-card" templateRows="60% 40%">
      <GatsbyLink to={path}>
        <Image src={imageUrl} />
        <Flex
          zIndex={2}
          className="event-details"
          align="center"
          justify="center"
          textAlign="center"
          direction="column"
          p={5}
        >
          <Text fontSize={18}>{title}</Text>
          <Text fontSize={18}>{date}</Text>
          {/* <Text fontSize={18}>{excerpt}</Text> */}
          <Link href={link} isExternal fontWeight="bold" fontSize={"20px"}>
            Register
          </Link>
        </Flex>
      </GatsbyLink>
    </Grid>
  );
};

export default Event;
