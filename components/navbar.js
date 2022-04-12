import { Container, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import ToggleDarkMode from "./toggle-button";
import DesktopMenu from "./desktopMenu";

export default function Navbar() {
  const navBg = useColorModeValue("#eee8d5", "#073642");
  return (
    <Container maxW={"full"} bg={navBg} p={"0"}>
      <Container maxW={{ base: "full", md: "container.md" }} p={"0"}>
        <Flex p={"4"} align={"center"} justifyContent={"space-between"}>
          <Logo />
          <DesktopMenu />
          <Flex
            width={"28"}
            justifyContent={"flex-end"}
            ml={{ base: "0", lg: "4" }}
          >
            <ToggleDarkMode />
            <Spacer />
            <Flex display={{ base: "flex", md: "none" }} flexDir={"column"}>
              <MobileMenu />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}
