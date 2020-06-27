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
    icon: <FacebookIcon size={25} color="#000" />,
    link: "https://www.facebook.com/hacksochku",
  },
  {
    icon: <LinkedInIcon size={25} color="#000" />,
    link: "https://www.linkedin.com/company/hackathon-society-hku/",
  },
  {
    icon: <InstagramIcon size={25} color="#000" />,
    link: "https://www.instagram.com/hacksoc_hku/",
  },
  {
    icon: <GithubIcon size={25} color="#000" />,
    link: "https://github.com/HackSocHKU",
  },
];

export const Social: FunctionComponent = () => (
  <Flex my={10}>
    {socialAccounts.map(({ icon, link }, index) => (
      <Link key={index} href={link} isExternal mx={5}>
        {icon}
      </Link>
    ))}
  </Flex>
);
