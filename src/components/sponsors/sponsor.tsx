import React, { FunctionComponent } from "react";
import { Link, Box } from "@chakra-ui/core";

interface SponsorComponentProps {
  name: string;
  logo: string;
  link?: string;
}

export const Sponsor: FunctionComponent<SponsorComponentProps> = ({
  detail: { logo, link },
}) => (
  <Link href={link} isExternal>
    <Box as={logo} maxW={["70vw", "sm", "sm", "sm"]} maxH="sm" h={12} m={5} />
  </Link>
);
