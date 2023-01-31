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
  const [cart, setCart] = useState<IProductProps[]>([]);
  function addProduct(product: IProductProps) {
    if (cart.find((item) => item.id === product.id)) {
      const filteredCard = cart.filter((item) => item.id !== product.id);
      setCart([...filteredCard, product] as IProductProps[]);
      return;
    } else {
      setCart([...cart, product] as IProductProps[]);
    }
  }
  function removeProduct(product: IProductProps) {
    const filteredCard = cart.filter((item) => item.id !== product.id);
    setCart(filteredCard);
  }
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
