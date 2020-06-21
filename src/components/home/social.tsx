import React, { FunctionComponent } from "react";
import { Flex, Text, Box, Link } from "@chakra-ui/core";
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

const socialAccounts = [
  {
    id: "facebook",
    icon: <FacebookIcon size={20} />,
    link: "https://www.facebook.com/hacksochku",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon size={20} />,
    link: "https://www.linkedin.com/company/hackathon-society-hku/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon size={20} />,
    link: "https://www.instagram.com/hacksoc_hku/",
  },
  {
    id: "github",
    icon: <GithubIcon size={20} />,
    link: "https://github.com/HackSocHKU",
  },
];

export const Social: FunctionComponent = () => (
  <Flex my={10}>
    {socialAccounts.map(({ id, icon, link }) => (
      <Link href={link} isExternal mx={5}>
        {icon}
      </Link>
    ))}
  </Flex>
);
