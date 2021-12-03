import { useState, useCallback } from "react";
import Hoodie1 from "../assets/hoodie1.png";
import Hoodie2 from "../assets/hoodie2.png";
import Hoodie3 from "../assets/hoodie3.png";
import Hoodie4 from "../assets/hoodie4.png";
import Hoodie5 from "../assets/hoodie5.png";
import Hoodie6 from "../assets/hoodie6.png";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: "product 1",
      description: "물건 1에대한 설명입니다.",
      thumbnail: `${Hoodie1}`,
      price: 210000,
    },
    {
      id: 2,
      name: "product 2",
      description: "물건 2에대한 설명입니다.",
      thumbnail: `${Hoodie2}`,
      price: 162000,
    },
    {
      id: 3,
      name: "product 3",
      description: "물건 3에대한 설명입니다.",
      thumbnail: `${Hoodie3}`,
      price: 39000,
    },
    {
      id: 4,
      name: "product 4",
      description: "물건 4에대한 설명입니다.",
      thumbnail: `${Hoodie4}`,
      price: 270000,
    },
    {
      id: 5,
      name: "product 5",
      description: "물건 5에대한 설명입니다.",
      thumbnail: `${Hoodie5}`,
      price: 97000,
    },
    {
      id: 6,
      name: "product 6",
      description: "물건 6에대한 설명입니다.",
      thumbnail: `${Hoodie6}`,
      price: 219000,
    },
  ]);
  const [orders, setOrders] = useState([]);
  const addToOrder = useCallback((id) => {
    console.log(id);
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);
      if (finded === undefined) {
        return [
          ...orders,
          {
            id,
            quantity: 1,
          },
        ];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  const remove = useCallback((id) => {
    setOrders((orders) => orders.filter((order) => order.id !== id));
  }, []);
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        products,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
