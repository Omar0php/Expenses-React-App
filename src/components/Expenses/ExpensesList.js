import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.filter.length === 0) {
    return <h2 className="expenses-list__fallback"> Expenses No Found! </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filter.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          prise={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
