import React from "react";
import { Logo, MenuContainer, NavbarContainer } from "./styles";
import chillmarin from "../../../assets/icons/Chillmarin -03.png";
import MenuButton from "../../common/MenuButton";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <img src={chillmarin} alt="logo chillmarin" />
      </Logo>

      <MenuContainer>
        <MenuButton />
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
