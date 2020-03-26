import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  
  return (
    <>
    <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
        <li className="minus" key={transaction.id}>
          {transaction.text} <span>${transaction.amount}</span><button className="delete-btn">X</button>
        </li>
          
        ))}
      </ul>
    </>
  )
}
