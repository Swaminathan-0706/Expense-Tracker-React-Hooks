import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

function IncomeExpenses() {

  const{transactions}=useContext(GlobalContext);
  
  const amount=transactions.map(x=>x.amount);
  console.log(amount);
  const income=amount.filter(x=>(x>0)).reduce((acc,item)=>(acc+=item),0)
  console.log(income);
  const expense=amount.filter(x=>(x<0)).reduce((acc,item)=>(acc+=item),0)



    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">Rs. {income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">Rs. {expense}</p>
        </div>
      </div>
        
    )
}

export default IncomeExpenses
