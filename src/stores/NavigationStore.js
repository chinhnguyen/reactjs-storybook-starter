import React, { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { observable } from 'mobx';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const store = useLocalStore(() =>
    observable({
      title: ''
    })
  );
  return (
    <NavigationContext.Provider value={store}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
