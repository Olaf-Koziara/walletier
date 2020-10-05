import React, { useEffect, useState } from "react";
import loopIcon from "../assets/icons/update-arrow.png";
import { StyledLoopWrapper } from "./styled";
const Loop = () => {
  useEffect(() => {
    setRotateDeg(1080);
  }, []);
  const [rotateDeg, setRotateDeg] = React.useState(0);

  //   const startLoop = (e) => {
  //     setRotateDeg(rotateDeg + 720);
  //   };
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 100,
        backgroundColor: "rgba(199, 199, 208, 0.92)",
      }}
    >
      <StyledLoopWrapper deg={rotateDeg}>
        <img src={loopIcon} alt="wait" />
      </StyledLoopWrapper>
    </div>
  );
};

export default Loop;
