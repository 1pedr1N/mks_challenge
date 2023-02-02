import { IProductProps } from "@/interfaces/interface.product";
import { ICart } from "@/interfaces/interface.cart";
export interface ICartProps {
  totalPrice: number;
  cart: ICart[];
  addProduct: (product: IProductProps) => void;
  removeProduct: (product: IProductProps, deleteAll?: boolean) => void;
}
