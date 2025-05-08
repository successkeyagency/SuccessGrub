import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Scontext = createContext(null);

const ScontextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const url = "http://localhost:4000";

  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
      return updatedCart;
    });

    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });

    if (token) {
      try {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = food_list.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }else {
        console.log(`item with ID ${itemId} Not found in food list.`);
      }
    }
    return totalAmount ;
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data || []);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      setCartItems(response.data.cartData || {});
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    };
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return <Scontext.Provider value={contextValue}>{props.children}</Scontext.Provider>;
};

export default ScontextProvider;
