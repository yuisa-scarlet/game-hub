import { HStack, Image } from "@chakra-ui/react";
import AppLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
  <HStack padding="1rem">
      <Image src={AppLogo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
