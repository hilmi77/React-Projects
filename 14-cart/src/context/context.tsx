import React, {
  useState,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from "react";
import axios from "axios";
import cartItems from "../data";
import reducer from "../reducer";

type CartItems = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

type Action =
  | { type: "CLEAR_CART" }
  | { type: "REMOVE"; payload: number }
  | { type: "INCREASE"; payload: number }
  | { type: "DECREASE"; payload: number }
  | { type: "GET_TOTALS" }
  | { type: "LOADING" }
  | { type: "DISPLAY_ITEMS"; payload: CartItems[] }
  | { type: "TOGGLE_AMOUNT"; payload: { id: number; type: "inc" | "dec" } };

type CartState = {
  cart: CartItems[];
  total: number;
  amount: number;
  loading?: boolean;
};

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext<CartState | any>(null);

const initialState: CartState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await axios.get(url);
    const cart = response.data;
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const toggleAmount = (id: number, type: "inc" | "dec") => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease, toggleAmount }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
