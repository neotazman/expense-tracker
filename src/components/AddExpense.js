import React from "react"

export default function AddExpense({expense, handleInputChange, onSubmit, isCredit}) {


    return (
        <div>
            <input type="text" name='title' value={expense.title} placeholder='Name of Expense' onChange={handleInputChange}/>
            <input type="number" name="amount" value={expense.amount} placeholder='Amount of Expense' onChange={handleInputChange}/>
            <input type='text' name='entity' value={expense.entity} placeholder='Entity causing Expense' onChange={handleInputChange}/>
            <button onClick={isCredit} >Is this a Credit?</button>
            {expense.credit ? <span>yes</span> : <span>no</span>}
            <button type='submit' onClick={onSubmit} >Submit</button>
        </div>
    )
}
