import {
  ADD_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART,
} from "./type";

import type { Product, CartActionTypes } from "./type";

export const addToCart = (product: Product): CartActionTypes => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateQuantity = (
  id: number,
  quantity: number
): CartActionTypes => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const removeFromCart = (id: number): CartActionTypes => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
