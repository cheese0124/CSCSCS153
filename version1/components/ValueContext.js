import React, { createContext, useState, useContext } from 'react';

// Create Context
export const ValueContext = createContext();

// Create Provider
export const ValueProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <ValueContext.Provider value={{ expenses, addExpense, totalAmount }}>
      {children}
    </ValueContext.Provider>
  );
};


export const useValue = () => useContext(ValueContext);