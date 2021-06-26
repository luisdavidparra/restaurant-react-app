import { useState, createContext } from "react";
import { useContext } from "react/cjs/react.development";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const value = {
    shoppingCartItems,
    setShoppingCartItems,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);

export default DataContextProvider;
