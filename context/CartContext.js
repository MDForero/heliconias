'use client'
import { useReducer, useContext, createContext } from "react";
import { cartReducer, initialState } from "./Reducer";

export const CartContext = createContext()
export const CartDispatch = createContext()

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={state}>
      <CartDispatch.Provider value={dispatch}>
        {children}
      </CartDispatch.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispath() {
  return useContext(CartDispatch);
}