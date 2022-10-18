import Card from "../UI/Card";
import "../UI/Card.css";
import "./ExpensesList.css";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <ul className="expenses-list">
      <Card className="expense-item ">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">{props.prise}</div>
      </Card>
    </ul>
  );
}

export default ExpenseItem;
