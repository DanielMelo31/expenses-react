import { useState } from 'react';
import '../../styles/ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			date: new Date(enteredDate),
			amount: enteredAmount,
		};

		props.onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				{/* Title */}
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>

				{/*Date  */}
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2022-03-29"
						max="2025-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>

				{/* Amount */}
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
					<button type="button" onClick={props.onCancel}>
						Cancel
					</button>
				</div>
			</div>
		</form>
	);
};

export { ExpenseForm };
