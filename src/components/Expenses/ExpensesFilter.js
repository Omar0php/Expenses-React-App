import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const collectYearHandler = (event) => {
    props.yearFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={collectYearHandler}>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
