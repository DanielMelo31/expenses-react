import { useState } from 'react';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/ExpensesForms/NewExpense';
import './styles/App.css';

const initialExpensesArray = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
	{
		id: 'e5',
		title: 'Buy a brand new ferrary',
		amount: 50000,
		date: new Date(2022, 3, 24),
	},
];

function App() {
	const [expenses, setExpenses] = useState(initialExpensesArray);

	const onAddExpenseHandler = (expense) => {
		setExpenses((prevExpense) => {
			return [expense, ...prevExpense];
		});
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={onAddExpenseHandler} />
			<Expenses expensesArray={expenses} />
		</div>
	);
}

export default App;
