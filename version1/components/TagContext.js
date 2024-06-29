import React, { createContext, useState, useContext } from 'react';

// Create Context
export const TagContext = createContext();

// Create Provider
export const TagProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState('');

  return (
    <TagContext.Provider value={{ selectedTag, setSelectedTag }}>
      {children}
    </TagContext.Provider>
  );
};

export const useTag = () => useContext(TagContext);