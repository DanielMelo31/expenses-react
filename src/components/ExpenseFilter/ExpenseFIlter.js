import { useState } from 'react';
import '../../styles/ExpenseFilter.css';

const ExpenseFilter = (props) => {
	const selectorHandler = (event) => {
		props.onFilteredYear(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by Year</label>
				<select value={props.selectedYear} onChange={selectorHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export { ExpenseFilter };
