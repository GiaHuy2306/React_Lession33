import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import CartItem from "./CartItem";
import type { CardItem } from "../store/reducers/type";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <div className="w-full md:w-1/3 bg-white rounded shadow">
      <h2 className="bg-red-100 text-red-700 font-semibold p-2 rounded-t">
        Your Cart
      </h2>

      {items.length === 0 ? (
        <p className="p-4">Your cart is empty</p>
      ) : (
        <>
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border text-left">STT</th>
                <th className="p-2 border text-left">Name</th>
                <th className="p-2 border text-right">Price</th>
                <th className="p-2 border text-right">Quantity</th>
                <th className="p-2 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: CardItem, idx) => (
                <CartItem key={item.product.id} item={item} index={idx} />
              ))}
            </tbody>
          </table>

          <div className="p-2 text-sm">
            There are {items.length} items in your shopping cart.
          </div>

          <div className="p-2 text-right font-bold text-red-600 text-lg">
            {total} USD
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
