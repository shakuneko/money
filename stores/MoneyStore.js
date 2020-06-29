import React,{createContext,useState} from "react";
import TransferScreen from "../screens/TransferScreen";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [name ,setName] =useState(TransferScreen);
    const [pass ,setPass] =useState(TransferScreen);
    const store = {
        NameState:[name ,setName],
        PassState:[pass,setPass],

    };
  return(
      <StoreContext.Provider value={store}>
          {children}
      </StoreContext.Provider>
  );
};