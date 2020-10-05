import React from "react";

const CustomMonthCategory = ({ transactions }) => {
  const nowMonth = new Date().getMonth();
  let sum = 0;
  let categoriesArray = [];
  transactions.map((transcation) => {
    if (new Date(transcation.date).getMonth() === nowMonth) {
      const category = categoriesArray.find(
        (category) => category.name === transcation.category,
      );
      if (!category) {
        categoriesArray = [
          ...categoriesArray,
          { name: transcation.category, amount: transcation.amount },
        ];
      } else {
        category.amount += transcation.amount;
      }
    }
  });
  console.log(categoriesArray);
  return <div></div>;
};

export default CustomMonthCategory;
