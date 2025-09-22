export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const ADD_TO_CART = "ADD_TO_CART" as const;
export const UPDATE_QUANTITY = "UPDATE_QUANTITY" as const;
export const REMOVE_FROM_CART = "REMOVE_FROM_CART" as const;

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

interface UpdateQuantityAction {
  type: typeof UPDATE_QUANTITY;
  payload: { id: number; quantity: number };
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number;
}

export type CartActionTypes =
  | AddToCartAction
  | UpdateQuantityAction
  | RemoveFromCartAction;
