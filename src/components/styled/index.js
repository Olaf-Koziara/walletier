import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { Slice } from "victory";
import spaceBackground from "../../assets/spaceBackground.jpg";
//keyframes

//for nav

export const StyledNav = styled.div`
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(112, 70, 252, 1) 100%
  );
  width: 100%;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  padding: 5px 25px;
`;
export const StyledNavStart = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const StyledNavMid = styled.div`
  text-align: center;
  font-family: Rancher;
`;
export const StyledNavEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const StyledNavTextWrapper = styled.div`
  font-size: 40px;
  margin: 0 10px;

  font-weight: 600;
  border-radius: 5px;

  z-index: 20;
`;
export const StyledWalletWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 160px 40px;
  margin: 10px 0;
  padding: 5px;
  background-color: #171738;
  box-shadow: 3px 3px 5px 0px #fc2c77;
  color: #f0eff4;
  width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 15px 0px #841940;
  }
  ${({ clicked }) =>
    clicked &&
    css`
      box-shadow: inset 0px 3px 21px 1px rgba(0, 0, 0, 0.75) !important;
    `}
`;
export const StyledSlice = styled(Slice)`
  cursor: pointer;
`;

export const StyledAddWalletButton = styled.button`
  padding: 10px;
  text-align: center;
  font-size: 25px;
  box-shadow: 0px 20px 20px -17px rgba(0, 111, 255, 0.53);
  transition: 0.2s ease-in-out;
  border: 0;

  cursor: pointer;

  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: 180px;

  margin: 5px 0;
  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    display: block;
    width: 310px;
    height: 120px;
    top: 0;
    transition: 0.3s opacity ease-in-out;
    filter: blur(15px);
    opacity: 0;
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
  }
  &:after {
    content: "Add wallet";
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: rgba(235, 235, 235, 1);
    font-weight: bold;
    z-index: 5;
    position: absolute;
    display: block;
    border-radius: 180px;
    width: 92%;
    height: 80%;
    top: 10%;
    left: 4%;
    background-color: rgb(19, 20, 22);
  }
  &:hover {
    &:before {
      opacity: 1;
      transition: 0.3s opacity ease-in-out;
      filter: blur(25px);
      background: linear-gradient(
        60deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
      );
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  width: 130px;

  border-radius: 100%;
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(70, 252, 204, 1) 100%
  );

  box-shadow: 1px 1px 3px 1px #000000;
  margin: 0 5px;

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
//for form
export const StyledField = styled(Field)`
  line-height: 50px;
  background: #fafafa;
  -webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
`;
export const StyledSelectField = styled(Field)`
  width: 100% !important;
  outline: none;
  background: #fafafa;
  -webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
`;
export const StyledLabel = styled.label`
  &:after {
    content: ": ";
  }
`;
export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 5px;
`;
export const StyledFormWrapper = styled.div`
  width: 300px;
  margin: 0 0px;
  margin-top: 40px;
  ${({ mxAuto }) =>
    mxAuto &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
`;
//for home
export const StyledHomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledPieWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
  overflow: visible;
  position: relative;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
`;
export const StyledAddIconWrapper = styled.div`
  margin-top: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const StyledVictoryPieButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background-color: #fc2c77;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  text-align: center;
  font-family: "Noto Sans JP";
`;
export const StyledFilterMenuWrapper = styled.div`
  margin: auto;
  width: 30%;
  text-align: center;
  margin-bottom: 40px;
`;
//for templates
export const StyledUnloggedUserWrapper = styled.div`
  background: rgb(63, 94, 251);
  height: 1080px;
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
`;
export const StyledUnloggedLogoWrapper = styled.div`
  margin: auto;
  width: 500px;
`;
export const StyledTransparentButton = styled.button`
  text-decoration: none;
  border: 1px solid rgb(146, 148, 248);
  position: relative;
  overflow: hidden;
  background-color: transparent;
  width: ${({ width }) => (width ? width + "%" : "90px")};
  cursor: pointer;
  font-size: 25px;
  margin: 15px;
  height: 90px;
  ${({ mxAuto }) =>
    mxAuto &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
  ${({ noMx }) =>
    noMx &&
    css`
      margin-left: 0;
      margin-right: 0;
    `}
    ${({ noBorder }) =>
    noBorder &&
    css`
      border: 0;
    `}
    &:hover {
    box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
  }
  &:before {
    content: "";
    position: absolute;

    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(146, 148, 248, 0.4),
      transparent
    );
    transition: all 650ms;
  }
  &:hover:before {
    left: 100%;
  }
  ${({ category }) =>
    category &&
    css`
      &:before {
        height: 50px;
      }
    `}
  ${({ noBorder }) =>
    noBorder &&
    css`
      border: 0;
    `}
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 5px;
    `}
    ${({ textLight }) =>
    textLight &&
    css`
      color: whitesmoke;
    `}
`;
export const StyledNavLink = styled(Link)`
  height: 125px;
`;
export const StyledLoopWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(${({ deg }) => deg}deg);
  transition: 1s ease-in-out;
`;
//for transactions
export const StyledTransactionsListWrapper = styled.div`
  counter-reset: gradient-counter;
  list-style: none;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  text-align: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledTransactionsList = styled.ul`
  width: 100%;
  height: 450px;
  overflow: auto;
`;
export const StyledTransactionsWrapper = styled.div`
  background: radial-gradient(
    circle,
    rgba(21, 109, 121, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 1000px;
  display: flex;
`;
export const StyledTransactionsListItem = styled.li`
  box-shadow: 2px 2px 2px 3px #e488ff, -2px 2px 2px 3px #ff616b,
    3px 3px 5px 5px rgba(0, 0, 0, 0);
  background: white;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  list-style: none;
  counter-increment: gradient-counter;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  margin-top: 1rem;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  color: #f0eff4;
  text-align: start;
  display: flex;
  justify-content: space-between;
`;
export const StyledListItemTextWrapper = styled.div`
  margin-top: auto;
`;
export const StyledCategoriesButtonWrapper = styled.div`
  font-family: Rancher;
  font-weight: bolder;
  width: 50px;
  height: 50px;
  margin: 10px;
  position: relative;
  cursor: pointer;

  text-align: center;
`;
export const StyledCategoriesMenuWrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 500px;
  top: 0;
  left: -250px;
  background-color: #f0eff4;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(#414856, 0.05);
`;
export const StyledCheckBoxLabel = styled.label`
  position: absolute;
  height: 24px;
  width: 24px;
  border: 1px solid white;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const StyledAnimatedButton = styled.button`
  cursor: pointer;
  position: relative;
  display: block;
  margin: 15px auto;
  padding: 14px 15px;
  border: 2px solid #65b37a;
  color: #fff;
  font-size: 14px;
  border-radius: 0;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.08em;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  &:after {
    box-sizing: border-box;
    border: 3px solid #aea8d3;
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    opacity: 0;

    transform: translateX(-50%) translateY(-50%);
    transition: all 0.75s ease 0s;
  }

  &:hover:after {
    height: 120% !important;
    opacity: 1;
    color: #fff;
  }
  ${({ income }) =>
    income &&
    css`
      &:after {
        border: 3px solid #39ff14;
      }
      border: 3px solid #39ff14;
    `}
  ${({ outcome }) =>
    outcome &&
    css`
      &:after {
        border: 3px solid #ff073a;
      }
      border: 3px solid #ff073a;
    `}
`;
export const StyledCategoriesList = styled.ul`
  list-style: none;
  height: 400px;
  overflow: auto;
`;
export const StyledCategoriesListItem = styled.li`
  margin: 10px;
  border: 2px solid #3f5efb;
  border-radius: 4px;
`;
export const StyledTransactionButtonsWrapper = styled.div`
  display: flex;
  height: 120px;
  width: 320px;
  justify-content: space-between;
`;
