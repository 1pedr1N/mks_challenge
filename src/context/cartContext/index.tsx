import { createContext, ReactNode, useState, useEffect } from "react";
import { IProductProps } from "@/interfaces/interface.product";
import { ICart } from "@/interfaces/interface.cart";
import { ICartProps } from "@/interfaces/interface.cardprops";
type CartContextType = {
  children: ReactNode;
};
export const CartContext = createContext({} as ICartProps);

export const CartProvider = ({ children }: CartContextType) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function addProduct(_product: IProductProps) {
    const existsProduct = cart.find(
      ({ product }) => product.id === _product.id
    );

    if (existsProduct) {
      const updatedCart = cart.map((cart) => {
        if (cart.product.id === _product.id) {
          cart.amount += 1;
        }

        return cart;
      });

      return setCart([...updatedCart]);
    }

    const newProductInCart = {
      amount: 1,
      product: _product,
    };

    return setCart([...cart, newProductInCart] as ICart[]);
  }

  function removeProduct(_product: IProductProps, deleteAll = false) {
    const product = cart.find(({ product }) => product.id === _product.id);

    if (!product) return;

    // IF exists product can be decrement
    if (product.amount - 1 >= 1 && deleteAll === false) {
      const updatedCart = cart.map((cart) => {
        if (cart.product.id === _product.id) {
          cart.amount -= 1;
        }

        return cart;
      });

      return setCart([...updatedCart]);
    }

    // Else delete product from cart
    const updatedProducts = cart.filter(({ product }) => {
      if (product.id === _product.id) return false;
      return true;
    });

    return setCart(updatedProducts);
  }

  useEffect(() => {
    const totalAmount = cart.reduce((acc, cart) => {
      return acc + cart.amount * cart.product.price;
    }, 0);

    setTotalPrice(totalAmount);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ totalPrice, cart, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
