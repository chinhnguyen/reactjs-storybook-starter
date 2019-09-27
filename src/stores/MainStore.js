import React, { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { observable } from 'mobx';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const store = useLocalStore(() => observable({}));
  return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
};

export const useMain = () => useContext(MainContext);
