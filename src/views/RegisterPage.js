import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { StyledFormWrapper } from "../components/styled";

const RegisterPage = () => {
  return (
    <StyledFormWrapper mxAuto>
      <RegisterForm />
    </StyledFormWrapper>
  );
};

export default RegisterPage;
