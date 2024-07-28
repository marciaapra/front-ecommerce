import { IProduct } from "./product.interface";

export interface ICart {
  id: string;
  discount: number;
  tax: number;
  items: ICartItem[];
}

export interface ICartItem {
  id: string;
  quantity: number;
  price: number;
  product: IProduct;
}
