import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";


const rootReducers = combineReducers({
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers);
