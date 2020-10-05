import React from "react";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { StyledFormWrapper } from "../components/styled";

const LoginPage = () => {
  return (
    <StyledFormWrapper mxAuto>
      <LoginForm />
    </StyledFormWrapper>
  );
};

export default LoginPage;
