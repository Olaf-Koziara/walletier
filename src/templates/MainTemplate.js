import React from "react";
import Navbar from "../components/navigation/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default MainTemplate;
