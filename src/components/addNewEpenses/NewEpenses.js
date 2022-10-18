import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewEpenses.css";
const NewEpenses = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveFormData = (formdata) => {
    const expenseData = {
      ...formdata,
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  const showFormHandler = () => {
    setShowForm(true);
  };
  const stopShowForm = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
      {showForm && (
        <ExpenseForm collectdata={saveFormData} stopShow={props.stopShowForm} />
      )}
    </div>
  );
};

export default NewEpenses;
