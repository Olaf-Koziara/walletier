const { default: styled, css } = require("styled-components");

const Button = styled.button`
  border: 0;
  transition: 0.3s ease-in-out;
  ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
    `}
  ${({ red }) =>
    red &&
    css`
      border-radius: 4px;
      background-color: #d94347;
      &:hover {
        filter: grayscale(1.2);
      }
    `}
    ${({ light }) =>
    light &&
    css`
      color: #ffffff;
    `}
  cursor: pointer;
`;
export default Button;
