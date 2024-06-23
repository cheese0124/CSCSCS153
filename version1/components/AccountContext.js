import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Context
export const AccountContext = createContext();

// Create Provider
export const AccountProvider = ({ children }) => {
  const [accountName, setAccountName] = useState('');

  useEffect(() => {
    // Load account name from local storage when the component mounts
    const loadAccountName = async () => {
      try {
        const storedAccountName = await AsyncStorage.getItem('accountName');
        if (storedAccountName !== null) {
          setAccountName(storedAccountName);
        }
      } catch (error) {
        console.error('Failed to load account name from storage', error);
      }
    };

    loadAccountName();
  }, []);

  useEffect(() => {
    // Save account name to local storage whenever accountName changes
    const saveAccountName = async () => {
      try {
        await AsyncStorage.setItem('accountName', accountName);
      } catch (error) {
        console.error('Failed to save account name to storage', error);
      }
    };

    if (accountName) {
      saveAccountName();
    }
  }, [accountName]);

  return (
    <AccountContext.Provider value={{ accountName, setAccountName }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);