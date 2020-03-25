import React from 'react'

export const TransactionList = () => {
  return (
    <>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>=$400</span><button class="delete-btn">X</button>
        </li>
      </ul>
    </>
  )
}
