import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
    const expenses = props.expenses;

    return (
        <Card className="expenses">
            {expenses.map((expense) => {
                return (
                    <ExpenseItem 
                        date={expense.date}
                        amount={expense.amount}
                        title={expense.title}
                    />
                )
            })}
        </Card>  
    )
}