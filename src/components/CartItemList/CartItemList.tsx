import React from "react";

import { ICartItem } from "@/interfaces/cart.interface";

import CartItem from "@/components/CartItem/CartItem";
import Divisor from "@/components/Divisor/Divisor";

interface CartItemListProps {
  items: ICartItem[] | undefined;
}

const CartItemList = ({ items }: CartItemListProps) => {
  if (items && items.length > 0) {
    return (
      <>
        {items.map((item, index) => {
          return (
            <React.Fragment key={`cart_item_${index}`}>
              <CartItem cartItem={item} />
              {items.length - 1 > index && <Divisor />}
            </React.Fragment>
          );
        })}
      </>
    );
  }

  return <div>Carrinho vazio</div>;
};

export default CartItemList;
