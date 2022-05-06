import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        aria-label="Hamburger Button"
        ref={btnRef}
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
              <Link href={"/projects"}>
                <a>Projects</a>
              </Link>
              <Link href={"/blog"}>
                <a>Blog</a>
              </Link>
            </VStack>
            <style jsx>
              {`
                a:hover {
                  text-decoration: underline;
                }
              `}
            </style>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
