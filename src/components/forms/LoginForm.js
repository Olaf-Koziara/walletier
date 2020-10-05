import { Form, Formik } from "formik";
import React, { useState } from "react";
import { StyledField, StyledForm, StyledTransparentButton } from "../styled";
import { auth } from "../../firebaseConfig/firebase";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleLoginUser = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {})
      .catch((error) => {
        alert(`${error}`);
      });
  };
  return (
    <Formik>
      <StyledForm onSubmit={handleLoginUser}>
        <StyledField
          type="email"
          name="email"
          placeholder="e-mail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <StyledField
          type="password"
          name="password"
          placeholder="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <StyledTransparentButton
          style={{ width: "100%", margin: "0" }}
          rounded
          type="submit"
        >
          Login
        </StyledTransparentButton>

        <Link
          style={{
            padding: "0",
            margin: "5px",
          }}
          to="/register"
        >
          <StyledTransparentButton
            style={{ width: "100%", margin: "0" }}
            rounded
          >
            Register
          </StyledTransparentButton>
        </Link>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
