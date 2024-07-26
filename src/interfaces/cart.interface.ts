import { IProduct } from "./product.interface";

export interface ICart {
  discount: number;
  tax: number;
  items: ICartItem[];
}

export interface ICartItem {
  productId: string;
  quantity: number;
  price: number;
  product: IProduct;
}
