import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

function Transaction(props) {
    const{transaction}=props
    const{deleteTxn}=useContext(GlobalContext);
    const sign=transaction.amount<0?'-':'+';
    return (
        <li className={transaction.amount<0?'minus':'plus'}>
        {transaction.text}<span>Rs. {sign}{Math.abs(transaction.amount)}</span>
        <button onClick={()=>deleteTxn(transaction.id)} className="delete-btn">x</button>
        </li> 
    )
}

export default Transaction
