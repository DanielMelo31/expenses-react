import '../../styles/Expenses.css';
import { ExpenseFilter } from '../ExpenseFilter/ExpenseFIlter';
import { useState } from 'react';
import { ExpenseList } from '../Expenses/ExpenseList';
import { Chart } from '../Chart/Chart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filteredYearHandler = (year) => {
		setFilteredYear(year);
		console.log(year);
	};

	const filteredArray = props.expensesArray.filter(
		(items) => items.date.getFullYear().toString() === filteredYear
	);

	return (
		<div className="expenses">
			<ExpenseFilter
				selectedYear={filteredYear}
				onFilteredYear={filteredYearHandler}
			/>
			<Chart />
			<ExpenseList expensesArray={filteredArray} />
		</div>
	);
};

export { Expenses };
