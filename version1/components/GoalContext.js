import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const savedGoals = await AsyncStorage.getItem('goals');
        if (savedGoals) {
          console.log('Loaded goals:', savedGoals);
          setGoals(JSON.parse(savedGoals));
        }
      } catch (e) {
        console.error(e);
      }
    };
    loadGoals();
  }, []);

  useEffect(() => {
    const saveGoals = async () => {
      try {
        console.log('Saving goals:', JSON.stringify(goals));
        await AsyncStorage.setItem('goals', JSON.stringify(goals));
      } catch (e) {
        console.error(e);
      }
    };
    saveGoals();
  }, [goals]);

  const addGoal = (goal) => {
    console.log('Adding goal:', goal);
    setGoals([...goals, { ...goal, saved: goal.saved || 0 }]);
  };

  const updateGoal = (updatedGoal) => {
    console.log('Updating goal:', updatedGoal);
    const updatedGoals = goals.map(goal =>
      goal.name === updatedGoal.name ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  };
 
  const clearGoals=()=>{
    setGoals([]);
  };

  return (
    <GoalContext.Provider value={{ goals, addGoal, updateGoal,clearGoals }}>
      {children}
    </GoalContext.Provider>
  );
};