import { createContext, ReactNode, useState } from "react";
import { IProductProps } from "@/interfaces/interface.product";
type CartContextType = {
  children: ReactNode;
};
export const CartContext = createContext({} as ICartProps);

interface ICartProps {
  cart: IProductProps[];
  addProduct: (product: IProductProps) => void;
}
export const CartProvider = ({ children }: CartContextType) => {
  const [cart, setCart] = useState([]);
  function addProduct(product: IProductProps) {
    const cs = localStorage.getItem("cart");
  }
  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
