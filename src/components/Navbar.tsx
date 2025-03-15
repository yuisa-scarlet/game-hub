import { HStack, Image } from "@chakra-ui/react";
import AppLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function Navbar({ onSearch }: Props) {
  return (
  <HStack padding="1rem">
      <Image src={AppLogo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
}
