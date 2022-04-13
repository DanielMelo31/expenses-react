import { ExpenseItem } from './ExpenseItem';
import '../../styles/ExpenseList.css';

const ExpenseList = (props) => {
	if (props.expensesArray.length === 0) {
		return <p className="expenses-list__fallback">Found no elements</p>;
	}

	return (
		<li className="expenses-list">
			{props.expensesArray.map((items) => {
				return (
					<ExpenseItem
						key={items.id}
						title={items.title}
						date={items.date}
						price={items.amount}
					/>
				);
			})}
		</li>
	);
};

export { ExpenseList };
