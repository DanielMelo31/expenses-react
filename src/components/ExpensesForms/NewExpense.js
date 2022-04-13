import { useState } from 'react';
import '../../styles/NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

const NewExpense = (props) => {
	const [editingStatus, setEditingStatus] = useState(false);

	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setEditingStatus(true);
	};

	const renderFormIsEditing = () => {
		setEditingStatus(true);
	};

	const renderFormIsNotEditing = () => {
		setEditingStatus(false);
	};

	return (
		<div className="new-expense">
			{editingStatus === true ? (
				<ExpenseForm
					onSaveExpenseData={onSaveExpenseDataHandler}
					onCancel={renderFormIsNotEditing}
				/>
			) : (
				<button onClick={renderFormIsEditing}>Add expense</button>
			)}
		</div>
	);
};

export { NewExpense };
