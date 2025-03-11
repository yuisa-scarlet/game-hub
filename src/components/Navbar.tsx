import { HStack, Image } from "@chakra-ui/react";
import AppLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="1rem">
      <Image src={AppLogo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
