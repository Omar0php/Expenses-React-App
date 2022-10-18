import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const getYearFiltiring = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} yearFilter={getYearFiltiring} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpenseList filter={filterExpenses} />
    </Card>
  );
}

export default Expenses;
