import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/newexpense/NewExpense";

function App() {
	const expenses = [
		{
			Id: 1,
			title: "Curved TV",
			amount: 1000,
			date: new Date(2021, 1, 28),
		},
		{
			Id: 2,
			title: "Laptop",
			amount: 80000,
			date: new Date(2021, 5, 9),
		},
		{
			Id: 3,
			title: "Chair",
			amount: 20000,
			date: new Date(2021, 7, 6),
		},
		{
			Id: 4,
			title: "Head Phones",
			amount: 30000,
			date: new Date(2021, 6, 5),
		},
		{
			Id: 5,
			title: "Head Phones",
			amount: 30000,
			date: new Date(2021, 8, 28),
		},
	];
	return (
		<div>
			<NewExpense />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
