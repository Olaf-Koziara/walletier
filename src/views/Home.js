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
  const transactionsFilteredByTime = (transactions) => {
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      if (
        (!maxDate || transactionDate < maxDate) &&
        (!minDate || transactionDate > minDate)
      ) {
        return transaction;
      }
    });

    return filteredTransactions;
  };
  const summedUpByCategory = (transactions) => {
    let summedArray = [];
    transactions.map((transaction) => {
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
    });
    return summedArray;
  };
  const summedUp = (transactions) => {
    console.log(transactions);
    if (transactions) {
      return transactions.reduce((a, b) => a + (b.amount || 0), 0);
    }
  };
  let filteredOutcomes = [];
  let filteredIncomes = [];
  if (selectedWallet) {
    filteredOutcomes = transactionsFilteredByTime(selectedWallet.outcomes);
    filteredIncomes = transactionsFilteredByTime(selectedWallet.incomes);
  }
  return (
    <>
      {selectedWallet ? (
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
            {selectedWallet.outcomes ? (
              <CustomPie
                data={summedUpByCategory(filteredOutcomes)}
                total={summedUp(filteredOutcomes)}
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
                  labels={({ datum }) =>
                    `${datum.y} ${selectedWallet.currency}`
                  }
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                  domain={{ x: [0, 1] }}
                  data={[
                    { x: "incomes", y: summedUp(filteredIncomes), y0: 1 },
                    { x: "outcomes", y: summedUp(filteredOutcomes), y0: 1 },
                  ]}
                />
              </VictoryChart>
            </StyledPieWrapper>
            {selectedWallet.incomes ? (
              <>
                <CustomPie
                  data={summedUpByCategory(filteredIncomes)}
                  total={summedUp(filteredIncomes)}
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
          </StyledHomeWrapper>
        </>
      ) : null}
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
