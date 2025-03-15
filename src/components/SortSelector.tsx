import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} mb={4}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
      </MenuList>
    </Menu>
  );
}
