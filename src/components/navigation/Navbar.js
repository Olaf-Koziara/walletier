import React, { useState } from "react";
import styled, { css } from "styled-components";
import logo from "../../assets/walletLogo.png";
import addIcon from "../../assets/icons/001-add.png";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import WalletListItem from "../WalletListItem";
const StyledNav = styled.div`
  background-color: #96bde5;
  width: 100%;
  display: flex;
  padding: 5px 25px;
`;
const StyledAddWalletWrapper = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 25px;
  font-family: Roboto;
  box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #bbbfbc;
  }
`;
const StyledAddIconWrapper = styled.div`
  margin-top: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const StyledAddIcon = styled.img`
  &:hover {
    background-color: gold;
    transform: scale(1.3);
    border-radius: 100%;
    transition: 0.2s ease-in-out;
  }
`;

const StyledLogoWrapper = styled.div`
  width: 85px;
  border: 4px solid blue;
  border-radius: 100%;
  padding: 4px;
  box-shadow: 1px 1px 3px 1px #000000;
  transform: scale(0.95);

  ${({ isOpen }) =>
    isOpen &&
    css`
      box-shadow: 2px 2px 10px 5px #000000;
      transform: scale(1);
    `}
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;
const StyledHint = styled.div`
  opacity: 0;
  position: absolute;
  top: 10%;
  right: -100px;
  font-size: 0;
  transition: 0.4s ease-in-out;

  ${StyledAddIconWrapper}:hover & {
    opacity: 1;
    font-size: 20px;
  }
`;
const menuStyles = {
  bmBurgerButton: {
    display: "none",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",

    width: "100%",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    padding: "0.5em",
    width: "100%",
  },
  bmItem: {
    display: "inline-block",

    backgroundColor: "#F8F9F8",
    width: "100%",
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <StyledNav>
        <StyledLogoWrapper isOpen={isMenuOpen} onClick={toggleMenu}>
          <img style={{ width: "100%" }} src={logo} alt="logo" />
        </StyledLogoWrapper>
      </StyledNav>
      <Menu
        noOverlay
        disableOverlayClick
        isOpen={isMenuOpen}
        styles={menuStyles}
      >
        <StyledAddWalletWrapper>Add wallet</StyledAddWalletWrapper>

        <WalletListItem />
      </Menu>
    </>
  );
};

export default Navbar;
