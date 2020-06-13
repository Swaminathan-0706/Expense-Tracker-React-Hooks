import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState'
import Transaction from './Transaction';

function TransactionList() {
    const {transactions}=useContext(GlobalContext);
    
    return (
    <>
        <h3>History</h3>
         <ul id="list" className="list">
             {transactions.map
             (x=>(<Transaction key={x.id} transaction={x}/>) )}
               
                
            </ul>
          </>
        
    )
}

export default TransactionList
