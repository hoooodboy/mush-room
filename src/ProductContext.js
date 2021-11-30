import React, { useReducer, createContext, useContext, useRef } from "react";

const initialProducts = [
  {
    id: 1,
    text: "product 1",
    description: "물건 1에대한 설명입니다.",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
    price: 20,
  },
  {
    id: 2,
    text: "product 2",
    description: "물건 2에대한 설명입니다.",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
    price: 20,
  },
  {
    id: 3,
    text: "product 3",
    description: "물건 3에대한 설명입니다.",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
    price: 20,
  },
  {
    id: 4,
    text: "product 4",
    description: "물건 4에대한 설명입니다.",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
    price: 20,
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
