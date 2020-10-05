import React, { useState } from "react";
import { connect } from "react-redux";
import CustomPie from "../components/dataVisualization/CustomPie";
import "./Home.css";
import addIcon from "../assets/icons/001-add.png";
import Button from "../components/atoms/Button";
import {
  StyledFilterMenuWrapper,
  StyledHomeWrapper,
  StyledPieWrapper,
  StyledVictoryPieButtonWrapper,
} from "../components/styled";
import { auth } from "../firebaseConfig/firebase";
import { VictoryBar, VictoryChart } from "victory";
import CustomMonthCategory from "../components/dataVisualization/CustomMonthCategory";
import FilterMenu from "../components/transactions/FilterMenu";

const Home = ({ wallets, selectedWalletId, selectedWallet }) => {
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);

  const summedUpByCategory = (transactions) => {
    let summedArray = [];
    transactions.map((transaction) => {
      const transactionDate = new Date(transaction.date);
      if (
        (!maxDate || transactionDate < maxDate) &&
        (!minDate || transactionDate > minDate)
      ) {
        const category = summedArray.find(
          (category) => category.name === transaction.category,
        );

        if (!category) {
          summedArray = [
            ...summedArray,
            { name: transaction.category, amount: transaction.amount },
          ];
        } else {
          category.amount += transaction.amount;
        }
      }
    });
    return summedArray;
  };
  if (selectedWallet) {
    console.log(summedUpByCategory(selectedWallet.outcomes));
  }
  return (
    <>
      <StyledFilterMenuWrapper>
        <FilterMenu
          minDate={minDate}
          setMinDate={setMinDate}
          maxDate={maxDate}
          setMaxDate={setMaxDate}
        />
      </StyledFilterMenuWrapper>
      <StyledHomeWrapper>
        {selectedWallet ? (
          <>
            {selectedWallet.outcomesSummedUpByCategory.length > 0 ? (
              <CustomPie
                data={summedUpByCategory(selectedWallet.outcomes)}
                total={selectedWallet.outcomesTotal}
              >
                <StyledVictoryPieButtonWrapper>
                  <div
                    style={{ margin: "30px", fontSize: "20px", color: "white" }}
                  >
                    Outcomes
                    <Button transparent={true}>
                      <img
                        style={{
                          margin: "auto",
                          width: "50px",
                        }}
                        src={addIcon}
                        alt="add"
                      />
                    </Button>
                  </div>
                </StyledVictoryPieButtonWrapper>
              </CustomPie>
            ) : (
              <h1>No outcomes</h1>
            )}

            <StyledPieWrapper>
              <VictoryChart height={300} width={300}>
                <VictoryBar
                  c
                  alignment="start"
                  style={{
                    data: {
                      fill: ({ datum }) =>
                        datum.x === "incomes" ? "green" : "red",
                    },
                  }}
                  domain={{ x: [0, 1] }}
                  data={[
                    { x: "incomes", y: selectedWallet.incomesTotal, y0: 1 },
                    { x: "outcomes", y: selectedWallet.outcomesTotal, y0: 1 },
                  ]}
                />
              </VictoryChart>
            </StyledPieWrapper>
            {selectedWallet.incomes ? (
              <>
                <CustomPie
                  data={selectedWallet.incomesSummedUpByCategory}
                  total={selectedWallet.incomesTotal}
                >
                  <StyledVictoryPieButtonWrapper>
                    <div
                      style={{
                        margin: "30px",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      Incomes
                      <Button transparent={true}>
                        <img
                          style={{
                            margin: "auto",
                            width: "50px",
                          }}
                          src={addIcon}
                          alt="add"
                        />
                      </Button>
                    </div>
                  </StyledVictoryPieButtonWrapper>
                </CustomPie>
                <CustomMonthCategory transactions={selectedWallet.incomes} />
              </>
            ) : null}
          </>
        ) : null}
      </StyledHomeWrapper>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    wallets: state.wallets,
    selectedWallet: state.selectedWallet,
  };
};
export default connect(mapStateToProps)(Home);
