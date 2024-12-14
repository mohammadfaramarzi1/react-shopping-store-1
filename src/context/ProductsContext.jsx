import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../utils/utils";

const ProductsContext = createContext();

const initialState = {
  selectedItems: [],
  totalPrice: 0,
  count: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.some((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: state.selectedItems,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        selectedItems: newSelectedItems,
        ...sumProducts(newSelectedItems),
        checkout: false,
      };
    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        selectedItems: state.selectedItems,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        selectedItems: state.selectedItems,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        count: 0,
        totalPrice: 0,
        checkout: true,
      };
  }
};

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ dispatch, state }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const { state, dispatch } = useContext(ProductsContext);
  return [state, dispatch];
};

export { useProducts };
export default ProductsProvider;
