export interface CartBoxProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  img: string;
  click: () => void;
  add: () => void;
  remove: () => void;
  numberProducts: number;
}
