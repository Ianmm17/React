import React, {useState} from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


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
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses