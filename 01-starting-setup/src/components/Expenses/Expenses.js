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

    return (
        <div>
            <Card className={'expenses'}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map((expense) => (
                    <ExpenseItem
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