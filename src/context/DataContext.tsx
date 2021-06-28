import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { ShoppingCartItem } from "../models/ShoppingCartItem";

const DataContext = createContext<DataContext>({
  shoppingCartItems: [],
  setShoppingCartItems: () => {},
});

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface DataContext {
  shoppingCartItems: ShoppingCartItem[];
  setShoppingCartItems: Dispatch<SetStateAction<ShoppingCartItem[]>>;
}

const DataContextProvider: React.FC = ({ children }) => {
  const [shoppingCartItems, setShoppingCartItems] = useState<ShoppingCartItem[]>([]);

  const value = {
    shoppingCartItems,
    setShoppingCartItems,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);

export default DataContextProvider;
