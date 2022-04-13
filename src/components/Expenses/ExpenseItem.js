import { useState } from 'react';
import '../../styles/ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';

const ExpenseItem = (props) => {
	const [itemTitle, setItemTitle] = useState(props.title);

	const displayName = () => {
		setItemTitle('Updated');
		console.log(itemTitle);
	};

	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{itemTitle}</h2>
				<div className="expense-item__price">{props.price}</div>
			</div>
			<button onClick={displayName} className="expense-item__update-title">
				Update title
			</button>
		</div>
	);
};

export { ExpenseItem };
