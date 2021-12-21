import React from 'react'
import AddExpense from './components/AddExpense'

export default function Main() {
    const expenses = [
        {
            title: 'dummyExpense',
            amount: 5.60,
            entity: 'Starbucks',
            credit: false,
        }
    ]


    return (
        <div>
            <AddExpense />
            {expenses && expenses.map(expense => <p>{expense.title}, {expense.credit ? `+$${expense.amount}` : `-$${expense.amount}`}, {expense.entity}</p>)}
        </div>
    )
}
