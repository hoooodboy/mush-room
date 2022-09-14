import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useProducts() {
  const { products } = useContext(AppStateContext);
  return products;
}
