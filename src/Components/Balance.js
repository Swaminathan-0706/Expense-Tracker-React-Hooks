import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState'

function Balance() {
    const{transactions}=useContext(GlobalContext);
    const amount=transactions.map(x=>(
        x.amount
    ))
    const total=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    
    return (
        <>
        <h4>Your Balance</h4>
        <h1 >Rs.{total}</h1>
        </>
    )
}

export default Balance
