import ExpenseItem from "../Expenses/ExpenseItem";
import "../../styles/Expenses.css";
import Card from "./UI/Card";

function Expenses(props) {
	const expenses = props.items;

	return (
		<div>
			<Card className="expenses">
				{[...expenses].map((expense) => (
					<ExpenseItem
						key={expense.Id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
}

export default Expenses;
