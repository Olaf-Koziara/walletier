import React, { useState } from "react";
import styled, { css } from "styled-components";
import logo from "../../assets/walletLogo200.png";

import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import WalletListItem from "./WalletListItem";
import { connect } from "react-redux";
import transactionIcon from "../../assets/icons/002-money-transfer.png";
import Modal from "react-modal";
import homeIcon from "../../assets/house.png";
import "./Navbar.css";
import "../../animations/glitchAnimation.css";

import {
  StyledAddWalletButton,
  StyledLogoWrapper,
  StyledNav,
  StyledNavEnd,
  StyledNavLink,
  StyledNavMid,
  StyledNavStart,
  StyledNavTextWrapper,
  StyledTransparentButton,
} from "../styled";
import AddWalletForm from "../forms/AddWalletForm";
import RegisterForm from "../forms/RegisterForm";
import Button from "../atoms/Button";
import LoginForm from "../forms/LoginForm";
import { auth } from "../../firebaseConfig/firebase";
import { CSSTransition } from "react-transition-group";

const menuStyles = {
  bmMenuWrap: {
    width: "400px",
  },
  bmBurgerButton: {
    display: "none",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmMenu: {
    background: "linear-gradient(to top right, #fc2c77 0%, #6c4079 100%)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",

    width: "100%",
  },
  bmMorphShape: {
    fill: "#fc2c77",
  },
  bmItemList: {
    padding: "0.5em",
    width: "100%",
  },
  bmItem: {
    display: "inline-block",

    backgroundColor: "",
    width: "100%",
  },
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: " #fff",

    borderRadius: "10px",

    boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)",
  },
  overlay: {
    background: "linear-gradient(to top right, #fc2c77 0%, #6c4079 100%)",
    zIndex: "100",
  },
};

const Navbar = ({ wallets, addWallet, selectedId, selectedWallet }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddingWallet, setIsAddingWallet] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseModal = () => {
    setIsAddingWallet(false);
    setIsMenuOpen(false);
  };
  console.log("selectedid", selectedId);

  return (
    <>
      <StyledNav>
        <StyledNavStart>
          <div>
            <StyledTransparentButton
              rounded
              isOpen={isMenuOpen}
              onClick={toggleMenu}
            >
              <img
                style={{
                  width: "90px",
                }}
                src={logo}
                alt="logo"
              />
            </StyledTransparentButton>
          </div>

          <StyledNavLink to="/" activeClassName="activeLink" exact>
            <StyledTransparentButton rounded>
              <img
                style={{
                  width: "90px",
                }}
                src={homeIcon}
                alt="transations"
              />
            </StyledTransparentButton>
          </StyledNavLink>
          <StyledNavLink activeClassName="activeLink" to="/transactions">
            <StyledTransparentButton rounded>
              <img height="72px" src={transactionIcon} alt="transations" />
            </StyledTransparentButton>
          </StyledNavLink>
        </StyledNavStart>
        {selectedWallet ? (
          <StyledNavMid>
            <h1 class="hero-heading">
              <div class="glitch-wrapper">
                <StyledNavTextWrapper noMX>Name:</StyledNavTextWrapper>
                <div
                  className="glitch noMX"
                  data-text={selectedWallet.walletName}
                >
                  {selectedWallet.walletName}
                </div>
                <StyledNavTextWrapper>Balance:</StyledNavTextWrapper>
                <div
                  class="glitch"
                  data-text={
                    selectedWallet.balance + " " + selectedWallet.currency
                  }
                >
                  {selectedWallet.balance + " " + selectedWallet.currency}
                </div>
              </div>
            </h1>
          </StyledNavMid>
        ) : (
          <StyledNavMid>
            <div class="glitch" data-text="no wallet selected">
              no wallet selected
            </div>
          </StyledNavMid>
        )}
        <StyledNavEnd>
          <StyledNavLink to="/">
            <StyledTransparentButton
              rounded
              onClick={() => {
                auth.signOut();
              }}
            >
              Logout
            </StyledTransparentButton>
          </StyledNavLink>
        </StyledNavEnd>
      </StyledNav>
      <Menu noOverlay isOpen={isMenuOpen} styles={menuStyles}>
        {!isAddingWallet ? (
          <StyledAddWalletButton onClick={() => setIsAddingWallet(true)}>
            Add wallet
          </StyledAddWalletButton>
        ) : null}

        <ul>
          {wallets.map((wallet, index) => {
            return <WalletListItem {...wallet} index={index} />;
          })}
        </ul>
      </Menu>
      <CSSTransition
        apper
        in={isAddingWallet}
        timeout={200}
        classNames="walletModal"
      >
        <Modal isOpen={isAddingWallet} style={customStyles}>
          <AddWalletForm closeModal={handleCloseModal} />
        </Modal>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    wallets: state.wallets,
    selectedId: state.selectedWalletId,
    selectedWallet: state.selectedWallet,
  };
};

export default connect(mapStateToProps)(Navbar);
