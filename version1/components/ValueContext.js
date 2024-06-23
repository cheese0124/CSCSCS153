import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Context
export const ValueContext = createContext();

// Create Provider
export const ValueProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Load expenses from local storage when the component mounts
    const loadExpenses = async () => {
      try {
        const storedExpenses = await AsyncStorage.getItem('expenses');
        if (storedExpenses !== null) {
          setExpenses(JSON.parse(storedExpenses));
        }
      } catch (error) {
        console.error('Failed to load expenses from storage', error);
      }
    };

    loadExpenses();
  }, []);

  useEffect(() => {
    // Save expenses to local storage whenever expenses change
    const saveExpenses = async () => {
      try {
        await AsyncStorage.setItem('expenses', JSON.stringify(expenses));
      } catch (error) {
        console.error('Failed to save expenses to storage', error);
      }
    };

    if (expenses.length > 0) {
      saveExpenses();
    }
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <ValueContext.Provider value={{ expenses, addExpense, setExpenses, totalAmount }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => useContext(ValueContext);