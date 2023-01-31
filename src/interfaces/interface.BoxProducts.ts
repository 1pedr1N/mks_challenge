export interface BoxProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  img: string;
  click: () => void;
}
