import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./components/Expenses/Expenses";
import NewEpenses from "./components/addNewEpenses/NewEpenses";
import { useState } from "react";

const date = new Date("October, 13, 2022");
const DUMMY_EXPENSES = [
  { id: 1, title: "panana", amount: "34.9$", date: date },
  { id: 2, title: "apple", amount: "22.9$", date: date },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewEpenses onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />;
    </div>
  );
}

export default App;
