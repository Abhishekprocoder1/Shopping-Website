import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaltCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaltCart());
  const [token, setToken] = useState(localStorage.getItem('auth-token') || '');
  const url = "https://shopping-website-backend-xb6k.onrender.com";

  useEffect(() => {
    fetch(`${url}/allproducts`)
      .then((response) => response.json())
      .then((data) => setAll_product(data));

    if (token) {
      fetch(`${url}/getcart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItem(data));
    }
  }, [url, token]);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if (token) {
      fetch(`${url}/addtocart`, {
        method: 'POST',
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: itemId
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const removeaddToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      fetch(`${url}/removefromCart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: itemId
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalcartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = { getTotalcartItem, getTotalCartAmount, all_product, cartItem, addToCart, removeaddToCart, token, url };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
