import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext(null);

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    return localCart;
  });

  // total for cart
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((total, item, index) => {
      return (total = total + item.offerPrice * item.quantity);
    }, 0);

    setCartTotal(total);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add new item to cart
  function handleAddToCart(item) {
    const existingRestaurant = localStorage.getItem("cartRest");
    console.log("item is: ", item)

    // Check if the cart already has items from a different restaurant
    if (existingRestaurant && existingRestaurant !== item.restaurantId) {
      toast.error("You already cart another restaurant item.");
      return false;
    }

    // If it's the first item or from the same restaurant
    localStorage.setItem("cartRest", item.restaurantId);
    setCart((prev) => [...prev, item]);

    toast.success("Item add to cart.");
  }

  // increase quantity in cart
  function handleIncreaseQuantity(id) {
    const updateQuantity = cart.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updateQuantity);
  }

  // handle decrease quantity
  function handleDecreaseQuantity(id) {
    const updateQuantity = cart.map((item) => {
      if (item._id === id) {
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }

      return item;
    });

    setCart(updateQuantity);
  }

  // remove item from cart
  function handleRemoveItem(id) {
    const updatedCart = cart.filter((item) => item._id !== id);

    if (updatedCart.length === 0) {
      localStorage.removeItem("cartRest");
    }
    setCart(updatedCart);
    toast.success("Item remove from cart.");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        cartTotal,
        handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;