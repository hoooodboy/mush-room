import React, { useReducer, createContext, useContext, useRef } from "react";
import Hoodie1 from "./assets/hoodie1.png";
import Hoodie2 from "./assets/hoodie2.png";
import Hoodie3 from "./assets/hoodie3.png";
import Hoodie4 from "./assets/hoodie4.png";
import Hoodie5 from "./assets/hoodie5.png";
import Hoodie6 from "./assets/hoodie6.png";

const initialProducts = [
  {
    id: 1,
    name: "product 1",
    description: "물건 1에대한 설명입니다.",
    thumbnail: `${Hoodie1}`,
    price: "210,000",
  },
  {
    id: 2,
    name: "product 2",
    description: "물건 2에대한 설명입니다.",
    thumbnail: `${Hoodie2}`,
    price: "162,000",
  },
  {
    id: 3,
    name: "product 3",
    description: "물건 3에대한 설명입니다.",
    thumbnail: `${Hoodie3}`,
    price: "39,000",
  },
  {
    id: 4,
    name: "product 4",
    description: "물건 4에대한 설명입니다.",
    thumbnail: `${Hoodie4}`,
    price: "270,000",
  },
  {
    id: 5,
    name: "product 5",
    description: "물건 5에대한 설명입니다.",
    thumbnail: `${Hoodie5}`,
    price: "97,000",
  },
  {
    id: 6,
    name: "product 6",
    description: "물건 6에대한 설명입니다.",
    thumbnail: `${Hoodie6}`,
    price: "219,000",
  },
];

function productReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.product);
    case "TOGGLE":
      return state.map((product) =>
        product.id === action.id ? { ...product, done: !product.done } : product
      );
    case "REMOVE":
      return state.filter((product) => product.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ProductStateContext = createContext();
const ProductDispatchContext = createContext();
const ProductNextIdContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialProducts);
  const nextId = useRef(5);

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        <ProductNextIdContext.Provider value={nextId}>
          {children}
        </ProductNextIdContext.Provider>
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

export function useProductState() {
  const context = useContext(ProductStateContext);
  if (!context) {
    throw new Error("Cannot find ProductProvider");
  }
  return context;
}

export function useProductDispatch() {
  const context = useContext(ProductDispatchContext);
  if (!context) {
    throw new Error("Cannot find ProductProvider");
  }
  return context;
}

export function useProductNextId() {
  const context = useContext(ProductNextIdContext);
  if (!context) {
    throw new Error("Cannot find ProductProvider");
  }
  return context;
}
