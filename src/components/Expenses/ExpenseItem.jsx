import React from "react";
import "../../styles/ExpenseItem.css";
import Card from "../Expenses/UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../../styles/ExpenseDate.css";
function ExpenseItem(props) {
	const [title, setTitle] = React.useState(props.title);
	function clickhandler() {
		setTitle("Updated");
	}
	return (
		<div>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />

				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">ksh {props.amount}</div>
					<button onClick={clickhandler}>Click</button>
				</div>
			</Card>
		</div>
	);
}

export default ExpenseItem;
