import React, { useState } from 'react'

export default function AddExpense() {
    const initialState = {
        title: '',
        amount: 0,
        entity: '',
        credit: false,
    }
    const[expense, setExpense] = useState(initialState)
    const allExpenses = []
    const handleInputChange = (e) => {
        setExpense( ...expense, {[e.target.name]: e.target.value} )
    }
    const onSubmit = (e) => {
        e.preventDefault()
        allExpenses.push(expense)
        console.log(allExpenses)
        setExpense(initialState)
    }

    return (
        <div>
            <input type="text" name='title' value={expense.title} placeholder='Name of Expense' onChange={handleInputChange}/>
            <input type="number" name="amount" value={expense.amount} placeholder='Amount of Expense' onChange={handleInputChange}/>
            <input type='text' name='entity' value={expense.entity} placeholder='Who or what caused this Expense' onChange={handleInputChange}/>
            <button onClick={(e) => {
                e.preventDefault()
                setExpense( ...expense, expense.credit = true)
            }} >Is this a Credit?</button>
            <button type='submit' onClick={onSubmit} >Submit</button>
        </div>
    )
}
