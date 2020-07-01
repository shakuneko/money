import React,{createContext,useState} from "react";
// import TransferScreen from "../screens/TransferScreen";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [name ,setName] =useState('');
    const [money ,setMoney] =useState('');
    const store = {
        NameState: [name ,setName],
        MoneyState: [money,setMoney],

    };
  return(
      <StoreContext.Provider value={store}>
          {children}
      </StoreContext.Provider>
  );
};