import React, { useState } from 'react'
import AddExpense from './components/AddExpense'

export default function Main() {
    const expenses = [
        {
            title: 'dummyExpense',
            amount: 5.60,
            entity: 'Starbucks',
            credit: false,
        },
    ]

    //expense state
    const initialState = {
        title: '', //what the expense is
        amount: 0, //how much 
        entity: '', //what the expense is for
        credit: false, //there is logic for a gain, but i already called it expense. CHANGE TO TRANSACTION TRACKER
    }
    const[expense, setExpense] = useState(initialState)

    //drilling functions
    const handleInputChange = (e) => { //changing the expense values
        e.preventDefault()
        setExpense( {...expense, [e.target.name]: e.target.value} )
    }
    const isCredit = (e) => { //checking if it is income
        e.preventDefault()
        setExpense( {...expense, credit: !expense.credit} )
    }
    const onSubmit = (e) => {
        e.preventDefault()
        expenses.push(expense) //should add the expense to the array
        console.log(expenses, expense) //isn't adding right now, it's resetting the second index again and again
        setExpense(initialState) //clears the state after it submits
    }


    return (
        <div>
            <AddExpense expense={expense} handleInputChange={handleInputChange} onSubmit={onSubmit} isCredit={isCredit}/>
            {expenses && expenses.map((expense, keyNum) => <p key={keyNum} >{expense.title}, {expense.credit ? `+$${expense.amount}` : `-$${expense.amount}`}, {expense.entity}</p>)}
        </div>
    )
}
