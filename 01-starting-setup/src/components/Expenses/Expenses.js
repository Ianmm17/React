import React, {useState} from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'


function Expenses(props) {
    const [filteredYear, setFilterYear] = useState('2022')

    function filterChangeHandler(selectedYear) {
        setFilterYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(function (expense)  {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className={'expenses'}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>

    )
}

export default Expenses