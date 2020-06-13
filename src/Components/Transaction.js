import React from 'react'

function Transaction(props) {
    const{transaction}=props
    const sign=transaction.amount<0?'-':'+';
    return (
        <li className={transaction.amount<0?'minus':'plus'}>
        {transaction.text}<span>Rs. {sign}{Math.abs(transaction.amount)}</span>
        <button className="delete-btn">x</button>
        </li> 
    )
}

export default Transaction
