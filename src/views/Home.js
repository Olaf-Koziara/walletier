import React, { useEffect, useState } from "react";
import "./Home.css";
import styled from "styled-components";
import { VictoryPie, VictoryLabel, VictoryTooltip } from "victory";
const StyledVictryPie = styled(VictoryPie)`
  background-color: black;
  &:hover {
    box-shadow: 2px 2px 2px 2px black;
  }
`;
const outcome = [
  { x: "transport", y: 25 },
  { x: "food", y: 30 },
  { x: "home", y: 15 },
];
const initialDataForAnimation = [{ y: 20 }, { y: 30 }, { y: 60 }];

const Home = () => {
  const [dataForPie, setDataForPie] = useState(initialDataForAnimation);
  useEffect(() => {
    setDataForPie(outcome);
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <div
        style={{
          width: "400px",
          height: "400px",
          margin: "auto",
          overflow: "visible",
          boxShadow: " 2px 2px 2px 2px black",
        }}
      >
        <StyledVictryPie
          colorScale={["tomato", "green", "yellow"]}
          animate
          innerRadius={75}
          padding={50}
          labelPlacement="parallel"
          labelPosition="centroid"
          labelComponent={<VictoryTooltip active />}
          data={dataForPie}
          labels={({ datum }) => datum.x}
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
                          : { style: { fill: "#c43a31" } };
                      },
                    },
                    {
                      target: "labels",
                      mutation: ({ text, style }) => {
                        return {
                          text: ({ datum }) => datum.y,
                          style: { fontSize: "40px" },
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
                        return { text: ({ datum }) => datum.x };
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
