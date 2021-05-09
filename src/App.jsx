import ExpenseInputForm from "./expenseInputForm/expenseInputForm";
import ExpenseTable from "./expenseTable/expenseTable";

export default function App() {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <h1>Expense Tracker</h1>
                <br />
                <h3 className="text-success">Add A New Item</h3>
                <ExpenseInputForm />
            </div>
            <ExpenseTable />
        </div>
    )
}