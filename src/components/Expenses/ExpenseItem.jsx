import React from "react";
import "../../styles/ExpenseItem.css";
import Card from "../Expenses/UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../../styles/ExpenseDate.css";
function ExpenseItem(props) {
	const [title, setTitle] = React.useState(props.title);
	const [add, setAdd] = React.useState(0);

	function clickhandler() {
		setTitle("Updated");
	}

	const handleAdd = () => {
		setAdd(add + 1);
	};
	const handelsubtract = () => {
		setAdd(add - 1);
	};

	return (
		<div>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />

				<div className="expense-item__description">
					<h2>{title}</h2>
					<span>
						<button onClick={handleAdd}>+</button>
						<span>{add}</span> <button onClick={handelsubtract}>-</button>
					</span>
					<div className="expense-item__price">ksh {props.amount}</div>
					<button onClick={clickhandler}>Click</button>
				</div>
			</Card>
		</div>
	);
}

export default ExpenseItem;
