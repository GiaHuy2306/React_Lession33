import {
  ADD_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART,
} from "./type";

import type { Product, CartActionTypes, CartItem } from "./type";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartReducer = (
    state = initialState,
    action: CartActionTypes
): CartState => {
    switch (action.type) {
        case ADD_TO_CART: {

            const product: Product = action.payload;
            const existing = state.items.find((i) => i.product.id === product.id);
            
            if (existing) {
                return {
                    ...state,
                    items: state.items.map((i) => 
                        i.product.id === product.id
                    ? { ...i, quantity: i.quantity < 10 ? i.quantity + 1 : 10}
                    : i
                    ),
                }
            }else {
            return {
                ...state,
                items: [ ...state.items, { product, quantity: 1}]
                }
            }
        }
        case UPDATE_QUANTITY: {
            const { id, quantity } = action.payload;
            return {
                ...state,
                items: state.items.map((i) => 
                    i.product.id === id
                    ? {
                        ...i, 
                        quantity: quantity >= 1 && quantity <= 10 ? quantity : i.quantity,
                    }
                    : i
                )
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                items: state.items.filter((i) => i.product.id !== action.payload),
            }
        }
    
        default:
            return state;
    }
}