import { createContext, ReactNode, useState } from "react";
import { IProductProps } from "@/interfaces/interface.product";
type CartContextType = {
  children: ReactNode;
};
export const CartContext = createContext({} as ICartProps);

interface ICartProps {
  cart: IProductProps[];
  addProduct: (product: IProductProps) => void;
  removeProduct: (product: IProductProps) => void;
}
export const CartProvider = ({ children }: CartContextType) => {
  const [cart, setCart] = useState([]);
  function addProduct(product: IProductProps) {
    //teste
    setCart([...cart, product] as never[]);
    console.log("pega");
  }
  function removeProduct(product: IProductProps) {
    setCart([]);
  }
  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
