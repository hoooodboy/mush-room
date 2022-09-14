import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { orders } = useContext(AppStateContext);
  return orders;
}
