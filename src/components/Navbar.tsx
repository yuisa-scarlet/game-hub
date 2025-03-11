import { HStack, Image, Text } from "@chakra-ui/react";
import AppLogo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <HStack>
      <Image src={AppLogo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
}
