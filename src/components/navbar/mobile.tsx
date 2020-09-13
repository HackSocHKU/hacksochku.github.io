import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/core";
import { UseDisclosureReturn } from "@chakra-ui/core/dist/useDisclosure";

import { routes } from "./routes";
import { NavItem } from "./navitem";

interface MobileProps {
  disclosure: UseDisclosureReturn;
  activeHash: string;
  setActiveHash: (activeHash: string) => void;
}

export const Mobile: React.FC<MobileProps> = ({
  disclosure: { isOpen, onClose },
  activeHash,
  setActiveHash,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          {routes.map(({ id, text, isPage }) => (
            <NavItem
              key={id}
              id={id}
              text={text}
              activeHash={activeHash}
              setActiveHash={setActiveHash}
              isPage={isPage}
            ></NavItem>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
