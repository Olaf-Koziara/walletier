import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { VictoryPie, VictoryTooltip } from "victory";
import { StyledPieWrapper, StyledSlice } from "../styled";
import CustomLabel from "./CustomLabel";
const StyledVictryPie = styled(VictoryPie)`
  background-color: black;
  &:hover {
    box-shadow: 2px 2px 2px 2px black;
  }
`;

const initialDataForAnimation = [{ y: 20 }, { y: 30 }, { y: 60 }];

const CustomPie = ({ data, children, total }) => {
  const [dataForPie, setDataForPie] = useState(initialDataForAnimation);
  useEffect(() => {
    setDataForPie(dataForPie);
  }, []);
  console.log(total);

  return (
    <StyledPieWrapper>
      {children}

      <StyledVictryPie
        colorScale={["#F0EFF4", "#3D2645", "#3F5EFB", "#FC2C77"]}
        animate
        innerRadius={100}
        padding={50}
        // labelPlacement="parallel"
        // labelPosition="centroid"
        width={500}
        height={500}
        labelComponent={<VictoryTooltip active />}
        y="amount"
        labels={({ datum }) => datum.name}
        data={data}
        events={[
          {
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    mutation: ({ style }) => {
                      return style.fill === "#c43a31"
                        ? null
                        : { style: { fill: "#c43a31", transition: "2s" } };
                    },
                  },
                  {
                    target: "labels",
                    mutation: ({ text, style }) => {
                      return {
                        text: ({ datum }) =>
                          `${Math.floor((datum.amount / total) * 100)}%`,
                        style: { fontSize: "20px" },
                      };
                    },
                  },
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "data",
                    mutation: ({ style }) => {
                      return style.fill === "#c43a31"
                        ? null
                        : { style: { fill: "#c43a31" } };
                    },
                  },
                  {
                    target: "labels",
                    mutation: ({ text }) => {
                      return { text: ({ datum }) => datum.name };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
    </StyledPieWrapper>
  );
};

export default CustomPie;
