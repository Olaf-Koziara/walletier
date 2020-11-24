import { Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "../atoms/Button";
import { StyledField, StyledForm, StyledTransparentButton } from "../styled";
import { auth } from "../../firebaseConfig/firebase";
const RegisterForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isUserAccountCreated, setIsUserAccountCreated] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        alert("Account created");
        setIsUserAccountCreated(true);
      })
      .catch((error) => {
        alert(`${error}`);
      });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <StyledForm onSubmit={handleRegister}>
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
          style={{ width: "100%", margin: "0", marginTop: "5px" }}
          red
          type="submit"
        >
          Register
        </StyledTransparentButton>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
