export interface BoxProducts {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  quantity: number;
  click: () => void;
}
