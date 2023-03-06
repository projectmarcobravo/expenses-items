import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
    const expenses = props.expenses;

    return (
        <div>
            {expenses.map((expense) => {
                return (
                    <ExpenseItem 
                        date={expense.date}
                        amount={expense.amount}
                        title={expense.title}
                    />
                )
            })}
        </div>  
    )
}