import React, { useState } from "react"
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [renderExpenseForm, setrenderExpenseForm] = useState('')

    
    const [enteredTitle, setEnteredTitle] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        let expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        setrenderExpenseForm(false);

    };


    function ExpenseFormCancleHandler() {
        setrenderExpenseForm(false);
    }

    const addExpenseButtonClickHandler = ()=> {
        setrenderExpenseForm(true);
    };

    if (renderExpenseForm) {
        return (

            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}

                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2021-01-01"
                        max="2022-12-21"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={ExpenseFormCancleHandler}>cancel</button>
            </div>
        </form>
        )
    }

    

    return (
        <div
        onClick={addExpenseButtonClickHandler}>
            <button type="submit">Add New Expense</button>
        </div>
    )
}

export default ExpenseForm;