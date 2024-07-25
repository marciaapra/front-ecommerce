export interface ICart {
  items: ICartItem[];
}

export interface ICartItem {
  productId: string;
  quantity: number;
  price: number;
}
