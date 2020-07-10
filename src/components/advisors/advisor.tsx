import React, { FunctionComponent, useState, useRef } from "react";
import {
  Flex,
  Image,
  Text,
  Heading,
  Link,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Scale,
} from "@chakra-ui/core";
import {
  FaLinkedin as LinkedInIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

interface AdvisorDetails {
  name: string;
  role: string;
  picture: string;
  linkedin?: string;
  github?: string;
  description?: string;
}

interface AdvisorComponentProps {
  advisorDetails: AdvisorDetails;
}

const SocialAccounts: FunctionComponent<AdvisorComponentProps> = ({
  advisorDetails: { linkedin, github },
}) => (
  <Flex align="center" justify="center">
    {linkedin && (
      <Link href={linkedin} isExternal mx={1}>
        <LinkedInIcon size={20} color="#fff" />
      </Link>
    )}
    {github && (
      <Link href={github} isExternal mx={1}>
        <GithubIcon size={20} color="#fff" />
      </Link>
    )}
  </Flex>
);

export const Advisor: FunctionComponent<AdvisorComponentProps> = ({
  advisorDetails,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();
  const { picture, name, description } = advisorDetails;

  return (
    <Flex m={5} direction="column" align="center" flexGrow={1} flexWrap="wrap">
      <Scale in={isModalOpen}>
        {styles => (
          <Modal
            finalFocusRef={modalRef}
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            size={"min(90%, 600px)"}
          >
            <ModalOverlay />
            <ModalContent
              backgroundColor="primary"
              color="text"
              borderRadius={5}
              {...styles}
            >
              <ModalHeader>{name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{description}</ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Scale>
      <Link onClick={() => setModalOpen(true)} textAlign="center">
        <Image my={1} src={picture} alt={name} rounded="full" size={300} />
        <Heading my={1} as="h6" size="sm">
          {name}
        </Heading>
      </Link>
      <SocialAccounts advisorDetails={advisorDetails} />
    </Flex>
  );
};
