import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Inital state
const initialState = {
  transactions: [
    { id: 1, text: 'Coke', amount: -20 },
    { id: 2, text: 'Pay', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: -100 },
    { id: 5, text: 'Bonus', amount: 50 }
  ]
}

// Create Context

export const GlobalContext = createContext(initialState)

// Provider Component - we will wrap our components inside this in app.js
// the childrent will be the components which get wrapped inside this  

export const GlobalProvider = ({children}) => {
  const[state, dispatch] = useReducer(AppReducer, initialState)
  return( <GlobalContext.Provider value={{
    transactions: state.transactions
  }}>
    {children}
  </GlobalContext.Provider>
  )
}